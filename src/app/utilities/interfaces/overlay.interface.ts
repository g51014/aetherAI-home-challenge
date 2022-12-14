import { EAction, EModalType, ESize } from "@utilities/enums/common.enum";
export interface IOverlayCallbacks {
  confirm?: (params?: any) => any | void,
  cancel?: (params?: any) => any | void,
  backdrop?: (dialog: IDialog<any>) => void,
  [key: string]: undefined | ((params?: any) => any | void),

}

export interface IDialog<T = any> {
  component: any,
  id: string,
  params: IOverlay<T>
}

export interface IOverlay<T> {
  config?: T;
  callbacks?: IOverlayCallbacks;
  size?: ESize.Small | ESize.Middle | ESize.Large | ESize.XL;
  options?: {
    backdrop?: boolean;
    backdropClose?: boolean;
    isAside?: boolean
  }
}

export interface IModal {
  type: EModalType;
  title?: string;
  content?: string;
  cancel?: string;
  confirm?: string;
  scroll?: boolean;
  close?: boolean;
}

export interface ILoading {
  id: string;
  action: EAction.Add | EAction.Delete | EAction.Clear;
}
