import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/auth/auth.guard';
import { LandingComponent } from '@shared/layout/landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
