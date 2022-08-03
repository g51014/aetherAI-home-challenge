import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './landing/landing.component';
import { DirectivesModule } from '@shared/directives/directives.module';



@NgModule({
  declarations: [
    MenuComponent,
    LayoutComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
