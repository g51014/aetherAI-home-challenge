import {
  Directive,
  ElementRef,
  OnChanges,
  SimpleChanges,
  Input,
  Renderer2
} from '@angular/core';
import { timer, Subscription } from 'rxjs';
/**
 * @description detect value change, if current more than previous, will mark text green if not will mark red
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  /**
   * @description will mark background when value is changed.
   */
  @Input() parent?: Element;
  @Input() appHighlight?: number;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  private animation$ = timer(500);
  private activatedAnimation!: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['appHighlight'].firstChange) {
      const Previous = changes['appHighlight'].previousValue;
      const Current = changes['appHighlight'].currentValue;
      if (Current !== Previous) {
        if (this.activatedAnimation && !this.activatedAnimation.closed) {
          this.activatedAnimation.unsubscribe();
          this.reset();
        }
        this.play(Current < Previous);
      }
    }
  }

  private play(isDown: boolean) {
    this.setBackground(isDown);
    this.activatedAnimation = this.animation$.subscribe(
      () => { },
      () => { },
      () => this.reset()
    );
  }

  private setBackground(isDown: boolean) {
    this.renderer.setStyle(this.element.nativeElement, 'background-image',
      isDown ? 'linear-gradient(90deg, #FFFFFF 0%, #FEE7E7 100%)' : 'linear-gradient(90deg, #FFFFFF 0%, #EDF7E4 100%)');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
    if (this.parent) {
      this.renderer.setStyle(this.parent, 'background-color', '#E5F1FB');
    }
  }

  private reset() {
    this.renderer.removeStyle(this.element.nativeElement, 'background-image');
    this.renderer.removeStyle(this.element.nativeElement, 'transition');
    if (this.parent) {
      this.renderer.removeStyle(this.parent, 'background-color');
    }
  }

}
