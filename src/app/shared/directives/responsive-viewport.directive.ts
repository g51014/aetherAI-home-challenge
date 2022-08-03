import { ResizeObserver } from 'resize-observer';
import { tap, takeUntil } from 'rxjs/operators';
import { Directive, ElementRef, Renderer2, OnInit, Input, OnChanges, HostListener, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '@utilities/bases/base-component';
import { EDevice } from '@utilities/enums/common.enum';
import { WindowService } from '@utilities/services/window.service';
import { WindowHelper } from '@utilities/helper/window.helper';

/**
 * @description calculate viewport height dynamic
 */
@Directive({
  selector: '[appResponsiveViewport]',
})
export class ResponsiveViewportDirective extends BaseComponent implements OnInit {
  @Input() responseBuffers: Element[] = [];
  @Input() breakpoints: EDevice[] = [];
  @Output() OnResize = new EventEmitter<any>();

  constructor(
    private e: ElementRef,
    private $window: WindowService,
    private render: Renderer2
  ) {
    super();
  }

  private resize$: ResizeObserver = WindowHelper.resizeObserver(this.resizeViewport.bind(this));
  get bufferHeight() { return this.responseBuffers.reduce((total, current) => total = total + current.clientHeight, 0); }

  @HostListener('window:resize', ['$event'])
  onWindowResize = () => {
    if (this.breakpoints.length === 0 || this.breakpoints.some(breakpoint => breakpoint === WindowHelper.getDeviceType())) {
      this.resizeViewport();
    }
  }

  ngOnInit() {
    this.resizeViewport();
    if (this.breakpoints.length === 0) {
      this.responseBuffers.forEach(element => this.resize$.observe(element));
    } else {
      this.$window.device$.pipe(
        takeUntil(this.onDestroy$),
        tap((device) => this.onDeviceChanged(device))
      ).subscribe();
    }
  }

  private onDeviceChanged(device: EDevice) {
    this.responseBuffers.forEach(element => this.resize$.unobserve(element));
    this.render.removeStyle(this.e.nativeElement, 'height');
    if (this.breakpoints.some(breakpoint => breakpoint === device)) {
      this.responseBuffers.forEach(element => this.resize$.observe(element));
    }
  }

  private resizeViewport() {
    this.render.setStyle(this.e.nativeElement, 'height', `${window.innerHeight - this.bufferHeight}px`);
    this.OnResize.emit(this.e.nativeElement.getBoundingClientRect());
  }

  public onDestroy() {
    this.resize$.disconnect();
    this.render.removeStyle(this.e.nativeElement, 'height');
  }
}
