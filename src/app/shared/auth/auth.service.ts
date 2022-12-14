import { FirebaseService } from '@shared/services/firebase.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserService } from '@user/shared/services/user.service';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoggerService } from '@shared/services/logger.service';
import { OverlayService } from '@shared/overlay/overlay.service';
import { IUser } from '@utilities/interfaces/user.interface';
import { GoogleAuthProvider } from 'firebase/auth';
import { TimeHelper } from '@utilities/helper/time-helper';
import { User } from '@user/shared/models/user.model';
import { UserCenterService } from '@shared/services/user-center.service';

/**
 * auth
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private $auth: AngularFireAuth,
    private router: Router,
    private $user: UserService,
    private $logger: LoggerService,
    private $overlay: OverlayService,
    private $fb: FirebaseService,
    private $userCenter: UserCenterService
  ) { }

  get isAuth(): string | null {
    return sessionStorage.getItem('id');
  }

  public isAuth$ = this.$auth.authState.pipe(
    debounceTime(100),
    tap((res) => {
      if (!res?.uid) {
        this.router
          .navigateByUrl('landing')
          .then(() =>
            this.$logger.errorMessage(
              'Unknown user, please login first',
              null,
              'Auth'
            )
          );
      } else {
        sessionStorage.setItem('id', `${res.uid}`);
        this.$user.generateUser(res.uid);
      }
    }),
    filter((res) => !!res?.uid)
  );

  public login({ email, password }: { email: string; password: string }): void {
    const LoadingId = this.$overlay.startLoading();
    this.$auth
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        this.router
          .navigateByUrl(environment.defaultUrl)
          .then(() => this.$overlay.endLoading(LoadingId))
      )
      .catch(error => {
        this.$overlay.endLoading(LoadingId);
        alert(`${error}`);
      })
  }

  public signOn({
    name,
    email,
    password
  }: {
    name: string;
    email: string;
    password: string;
  }): void {
    const LoadingId = this.$overlay.startLoading();
    this.$auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) =>
        this.initialDBData(
          name,
          user?.uid as string,
          LoadingId
        ).then(() => this.login({ email, password }))
      )
      .catch((error) => {
        window.alert(error);
        this.$overlay.endLoading(LoadingId);
      });
  }

  public signWithGoogle() {
    const LoadingId = this.$overlay.startLoading();
    this.$auth
      .signInWithPopup(new GoogleAuthProvider())
      .then(({ user }) => this.$userCenter.fetchUser(user!.uid).then(res => {
        if (res) {
          this.router.navigateByUrl(environment.defaultUrl).then(() => this.$overlay.endLoading(LoadingId));
        } else {
          this.initialDBData(user?.displayName!, user?.uid!, LoadingId)
            .then(() => this.router
              .navigateByUrl(environment.defaultUrl)
              .then(() => this.$overlay.endLoading(LoadingId)));
        }
      })
      ).catch((error) => {
        window.alert(error);
        this.$overlay.endLoading(LoadingId);
      });
  }

  public logout(): void {
    this.$auth.signOut();
    this.$user.resetUser();
    this.router.navigateByUrl('landing');
  }


  /**
   * @description ????????????DB???????????????????????????
   */
  private initialDBData(name: string, uid: string, loadingId: string): Promise<void> {
    const initialUserData = new Promise((resolve) =>
      resolve(this.$fb.request('user')
        .create(new User({ uid, name, lastLoginDate: TimeHelper.today } as IUser).getUserData(), uid)));
    return Promise.all([initialUserData])
      .then(() => this.$overlay.endLoading(loadingId));
  }
}
