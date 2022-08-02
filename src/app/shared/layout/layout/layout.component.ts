import { Component } from '@angular/core';
import { AuthService } from '@shared/auth/auth.service';
import { UserService } from '@user/shared/services/user.service';
import { BaseComponent } from '@utilities/base/base-component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends BaseComponent {

  constructor(
    $user: UserService,
    public $auth: AuthService
  ) {
    super($user);
  }

  protected override onInit(): void {

  }

}
