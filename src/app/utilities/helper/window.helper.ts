import { EDevice } from '@utilities/enums/common.enum';
import { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';
import { ResizeObserver } from 'resize-observer'

export class WindowHelper {

  /**
   * @description 建立HTML Element觀察者
   * @param callback 被觀察HTML Element大小變動後須執行
   */
  static resizeObserver = (callback: (entry: ResizeObserverEntry) => void): ResizeObserver =>
    new ResizeObserver((entrys: ResizeObserverEntry[]) => entrys.forEach(entry => callback(entry)))

  /**
   * @description 獲得當前裝置大小斷點
   */
  static getDeviceType(): EDevice {
    const width = window.innerWidth;
    return (width >= 1279 ? EDevice.Desktop :
      (width < 1279 && width >= 767) ? EDevice.Tablet : EDevice.Mobile);
  }

  /**
   * @description 獲得HTML Element實際可用範圍
   */
  static getInnerBox(targetDOM: HTMLElement): { height: number, width: number } {
    const PaddingTop = +getComputedStyle(targetDOM).paddingTop;
    const PaddingBottom = +getComputedStyle(targetDOM).paddingBottom;
    const PaddingLeft = +getComputedStyle(targetDOM).paddingLeft;
    const PaddingRight = +getComputedStyle(targetDOM).paddingRight;
    return {
      height: targetDOM.clientHeight - (PaddingTop + PaddingBottom),
      width: targetDOM.clientWidth - (PaddingLeft + PaddingRight)
    };
  }
}
