import { ElementRef } from '@angular/core';
import { UserService } from '@user/shared/services/user.service';
import { BaseComponent } from '@utilities/base/base-component';

export class PopupBox extends BaseComponent {
  constructor($user?: UserService) {
    super($user);
  }

  public isOpen = false;
  private menu: any;

  private e = this.detectBlurEvent.bind(this);

  private detectBlurEvent(e: MouseEvent) {
    if (!this.menu.contains(e.target)) {
      this.collapse();
    }
  }

  /**
   * @description 展開漂浮視窗
   * @param menu 視窗可用範圍
   */
  public expand(menu: ElementRef | HTMLElement, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.menu = menu;
    this.isOpen = true;
    addEventListener('click', this.e);
    this.onExpand();
  }

  /**
   * @description 收合
   * @param element 欲模糊的元素
   */
  public collapse(element?: HTMLElement) {
    removeEventListener('click', this.e);
    if (element) { element.blur(); }
    this.isOpen = false;
    if (this.menu) { this.onClose(); }
  }

  protected onClose() { }
  protected onExpand() { }

}
