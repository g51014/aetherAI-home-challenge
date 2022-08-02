import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { OverlayModule } from './overlay/overlay.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    OverlayModule
  ],
  exports: [
    LayoutModule,
    OverlayModule
  ]
})
export class SharedModule { }
