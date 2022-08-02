import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty/empty.component';
import { StatusComponent } from './status/status.component';



@NgModule({
  declarations: [
    EmptyComponent,
    StatusComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmptyComponent,
    StatusComponent
  ]
})
export class GeneralModule { }
