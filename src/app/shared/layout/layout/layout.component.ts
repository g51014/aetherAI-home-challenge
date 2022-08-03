import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '@shared/auth/auth.service';
import { WindowService } from '@shared/services/window.service';
import { UserService } from '@user/shared/services/user.service';
import { BaseComponent } from '@utilities/base/base-component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends BaseComponent {

  @ViewChild("tPage") page!: ElementRef;

  constructor(
    $user: UserService,
    public $auth: AuthService,
    private $window: WindowService
  ) {
    super($user);
  }

  protected override onInit(): void {
    this.$window.scrollTop$.pipe(takeUntil(this.onDestroy$)).subscribe(scrollTop => {
      this.page.nativeElement.scrollTop = scrollTop;
    });
  }

}
