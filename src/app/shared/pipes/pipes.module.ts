import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CustomDatePipe } from './custom-date.pipe';
import { SanitizePipe } from './sanitize.pipe';



@NgModule({
  declarations: [
    CustomDatePipe,
    SanitizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomDatePipe,
    SanitizePipe,
  ],
  providers: [DecimalPipe]
})
export class PipesModule { }
