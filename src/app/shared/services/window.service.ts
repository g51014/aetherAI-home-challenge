import { WindowHelper } from '@utilities/helper/window.helper';
import { Injectable, ElementRef } from '@angular/core';
import { EDevice } from '@utilities/enums/common.enum';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WindowService {

  constructor() { }

  /**
   * @description 功能頁面區域當前寬度
   */
  public pageWidth: number;

  private device: BehaviorSubject<EDevice> = new BehaviorSubject(WindowHelper.getDeviceType());
  /**
   * @description 訂閱獲得當前畫面裝置斷點
   */
  public device$: Observable<EDevice> = this.device.asObservable().pipe(distinctUntilChanged());

  private scrollTop: Subject<number> = new Subject();
  /**
   * @description 訂閱獲得當前功能頁面區域卷動高度
   */
  public scrollTop$ = this.scrollTop.asObservable();

  /**
   * @description 捲動功能頁面至特定高度
   */
  public scrollTo(top: number): void { this.scrollTop.next(top); }

  /**
   * @description 元素是否觸碰畫面可用區域右邊界
   */
  public detectIsCollisionRightBound(e: ElementRef, left?: number): boolean {
    const rect = e.nativeElement.getBoundingClientRect();
    const toLeftBound = left || rect.left;
    const elementWidth = rect.width;
    return (document.body.clientWidth - toLeftBound - elementWidth) < (document.body.clientWidth - this.pageWidth) / 2;
  }

  /**
   * @description 元素是否觸碰畫面可用區域右邊界
   */
  public detectIsCollisionLeftBound(e: ElementRef): boolean {
    const rect = e.nativeElement.getBoundingClientRect();
    const toRightBound = rect.right;
    const elementWidth = rect.width;
    return (document.body.clientWidth - toRightBound - elementWidth) < (document.body.clientWidth - this.pageWidth) / 2;
  }

  /**
   * @description 刷新當前頁面裝置斷點
   */
  public onWindowResized() {
    this.device.next(WindowHelper.getDeviceType());
  }
}
