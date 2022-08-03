import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { OverlayModule } from './overlay/overlay.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ButtonsModule } from './buttons/buttons.module';
import { GeneralModule } from './general/general.module';
import { InputsModule } from './inputs/inputs.module';
import { DirectivesModule } from './directives/directives.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    DirectivesModule
  ],
  exports: [
    LayoutModule,
    OverlayModule,
    DropdownModule,
    ButtonsModule,
    GeneralModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    DirectivesModule
  ]
})
export class SharedModule { }
