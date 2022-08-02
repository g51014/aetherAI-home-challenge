import { ESize } from '@utilities/enums/common.enum';
import { Component, OnInit, Input, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { PopupBox } from '@utilities/base/popup-box';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends PopupBox implements OnInit {

  constructor() {
    super();
  }

  @Output() OnClose: EventEmitter<void> = new EventEmitter();
  @Input() fullWidth?: boolean;
  @Input() disabled?: boolean;
  @Input() autoHeight?: boolean;
  @Input() alert?: boolean;
  @Input() size: ESize = ESize.Middle;
  @ViewChild('tmenu') tmenu: any;


  public isRight = false;

  public close(target: HTMLElement) {
    target.blur();
    this.collapse();
  }


  protected override onClose(): void {
    this.OnClose.emit();
  }

}
