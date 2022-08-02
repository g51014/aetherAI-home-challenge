import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class InputsModule { }
