import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { User } from '@user/shared/models/user.model';
import { UserCenterService } from '@shared/services/user-center.service';
import { LoggerService } from '@shared/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private $userCenter: UserCenterService,
    private $logger: LoggerService
  ) { }

  private user = new BehaviorSubject<User | null>(null);
  public user$ = this.user.asObservable();

  /**
   * @description 生成使用者資料
   */
  public generateUser(uid: string): void {
    this.$userCenter.fetchUser(uid).then(user => {
      this.user.next(new User(user));
      this.$logger.systemMessage(`welcome user ${user.name}`);
    });
  }

  public resetUser(): void {
    this.user.next(null);
  }
}
