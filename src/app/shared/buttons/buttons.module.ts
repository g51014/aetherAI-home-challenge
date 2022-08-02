import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    RadioButtonComponent,
    SwitchButtonComponent
  ],
  exports: [
    ButtonComponent,
    RadioButtonComponent,
    SwitchButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ButtonsModule { }
