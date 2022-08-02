import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    RadioButtonComponent,
  ],
  exports: [
    ButtonComponent,
    RadioButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ButtonsModule { }
