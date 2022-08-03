import { WindowHelper } from '@utilities/helper/window.helper';
import { Injectable } from '@angular/core';
import { EDevice } from '@utilities/enums/common.enum';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WindowService {

  constructor() { }

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
   * @description 刷新當前頁面裝置斷點
   */
  public onWindowResized() {
    this.device.next(WindowHelper.getDeviceType());
  }
}
