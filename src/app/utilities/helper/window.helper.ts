import { EDevice } from '@utilities/enums/common.enum';
import { UAParser as UAParserAlias } from 'ua-parser-js';
import { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';
import { ResizeObserver } from 'resize-observer'

export class WindowHelper {
  /**
   * @description 當前裝置是否為移動裝置
   */
  static get isMobileDevice(): boolean {
    return ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
      .some(agent => window.navigator.userAgent.includes(agent));
  }

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

  /**
   * @description 當前瀏覽器是否為系統不支援瀏覽器
   */
  static isUnsupportBrowser(): boolean {
    try {
      const UserAgent = new UAParserAlias.UAParser(window.navigator.userAgent).getResult();
      const BrowserVersion = +UserAgent.browser.version.split('.')[0] || 0;
      const OsVersion = +UserAgent.os.version.split('.')[0] || 0;
      if (UserAgent.browser.name) {
        switch (UserAgent.browser.name.toLowerCase()) {
          case 'ie':
          case 'baiduboxapp':
            return true;
          case 'firefox':
            return BrowserVersion < 71;
          case 'edge':
            return BrowserVersion < 16;
          case 'safari':
          case 'mobile safari':
            if (UserAgent.browser.version) {
              return BrowserVersion < 11;
            } else if (UserAgent.os.name === 'iOS') {
              return OsVersion < 11;
            }
            return false;
          case 'webkit':
            return BrowserVersion < 604;
          default:
            if (UserAgent.browser.name.toLowerCase() === 'android browser' &&
              ((UserAgent.device.vendor && UserAgent.device.vendor.toLowerCase() === 'huawei') ||
                (!UserAgent.device.vendor && UserAgent.device.model && UserAgent.device.model.toLowerCase() === 'hry-al00a'))) {
              return true;
            }

            if (UserAgent.browser.name.toLowerCase() === 'maxthon' && UserAgent.browser.version === '5.1.60' &&
              UserAgent.os.name === 'Mac OS' && UserAgent.os.version === '10.11.6') {
              return true;
            }

            if (UserAgent.browser.name.toLowerCase() === 'qqbrowserlite' && UserAgent.browser.version === '1.0.4' &&
              UserAgent.os.name === 'Mac OS' && UserAgent.os.version === '10.12.1') {
              return true;
            }

            if (/Chrome/i.test(UserAgent.ua)) {
              // Chrome based: Chrome WebView、Opera、WeChat、2345Explorer、LBBROWSER、Maxthon、MetaSr、QQBrowser、Quark、UCBrowser
              return parseInt(UserAgent.ua.split('Chrome/')[1].split('.')[0], 10) < 71;
            }
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}
