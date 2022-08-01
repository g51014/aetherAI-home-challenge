import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface IDateRange {
  start: NgbDateStruct;
  end: NgbDateStruct;
}

export interface ITimeRange {
  begin?: ITime;
  end?: ITime;
}

export interface ITime {
  hour: number;
  min: number;
}

/**
 * @description 選單項目
 * @param key 下拉選單項目主鍵
 * @param icon 主選單項目icon
 * @param i18n 選單項目文字內容
 * @param path 主選單項目路徑
 * @param roles 主選單項目所需權限，任一即可
 */
export interface IMenuItem {
  key?: string;
  icon?: string;
  i18n?: string;
  path?: string;
  roles?: string[];
}

export interface IHyperlinkMenuItem {
  name: string;
  event?: (e: any) => void;
}

/**
 * @description 頁籤介面
 */
export interface ITab {
  id: number;
  nav?: string;
  hints?: number;
  active?: boolean;
}

/**
 * @description 功能服務事件介面
 */
export interface IEvent<T> {
  /**事件行為 */
  action: T;
  /**動態欄位 */
  fields?: string;
  /**分頁資料請求 */
  connectionInput?: IConnectionInput;
  [key: string]: any;
}

/**
 * @description 分頁資料請求介面
 */
export interface IConnectionInput<F = any, S = any> {
  /**第一筆資料index */
  first?: number;
  /**總共獲取資料筆數 */
  offset?: number;
  /**篩選條件 */
  filter?: F;
  /**排列條件 */
  sorting?: S[];
}

/**幣種格式化設定*/
export interface ICurrencySymbolConfig {
  /**幣種符號*/
  symbol: string;
  /**幣種小數位*/
  decimalPlace: number;
  /**是否需要最小位數*/
  requiredMinimum?: boolean;
  /**金額非數字時顯示的符號*/
  emptySymbol?: string;
}

/**自訂請求欄位基本介面 */
export interface IBaseCustomizeField {
  base?: string;
  [key: string]: string | IBaseCustomizeField | undefined;
}
