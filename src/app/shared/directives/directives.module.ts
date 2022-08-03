import { TooltipDirective } from './tooltip.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ResponsiveViewportDirective } from './responsive-viewport.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    TooltipDirective,
    ResponsiveViewportDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    TooltipDirective,
    ResponsiveViewportDirective,
  ]
})
export class DirectivesModule { }
