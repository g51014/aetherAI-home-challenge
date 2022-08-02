import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { OverlayModule } from './overlay/overlay.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ButtonsModule } from './buttons/buttons.module';
import { GeneralModule } from './general/general.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    OverlayModule
  ],
  exports: [
    LayoutModule,
    OverlayModule,
    DropdownModule,
    ButtonsModule,
    GeneralModule
  ]
})
export class SharedModule { }
