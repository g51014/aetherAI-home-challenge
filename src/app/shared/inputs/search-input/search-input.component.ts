import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { PopupBox } from '@utilities/base/popup-box';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent extends PopupBox {

  @Output() OnChange = new EventEmitter<string>();
  @Output() OnBlur = new EventEmitter<string>();
  @Output() OnClear = new EventEmitter<void>();
  @Input() id: string = '';
  @Input() placeholder?: string;
  @Input() title?: string;
  /**
   * @description default value
   */
  @Input() value: string = '';
  /**
   * @description input debounce
   */
  @Input() debounceTime = 0;
  /**
   * @description 篩選模式下的預設選項
   */
  @Input() selected?: string | null;
  /**
   * @description 無論搜尋框是否有內容皆顯示清除鈕
   */
  @Input() clearButton?: boolean;
  /**
   * @description 篩選模式
   */
  @Input() filter?: boolean;
  /**
   * @description set true to show alert message
   */
  @Input() alert?: boolean;

  constructor() {
    super();
  }

  get keyword() { return this.value; }
  set keyword(value: string) { this.input.next(value); }

  get filterMode() {
    return this.filter !== undefined && this.filter !== false;
  }

  get showClearButton() {
    return this.clearButton !== undefined && this.clearButton !== false;
  }

  get isShowSearch() {
    return (!this.value || (this.filterMode && !this.selected)) && !this.isShowClear;
  }

  private isShowClear = false;
  /**
   * @description handle input debounce
   */
  private input = new Subject<string>();
  private keyword$ = this.input.asObservable();

  protected override onChanges(changes: SimpleChanges): void {
    if ('selected' in changes) {
      this.value = changes['selected'].currentValue;
      this.collapse();
    }
  }

  protected override onInit(): void {
    this.keyword$.pipe(
      debounceTime(this.debounceTime),
      takeUntil(this.onDestroy$)
    ).subscribe(keyword => {
      this.value = keyword;
      this.OnChange.emit(this.value);
    });
  }

  public clear(event: MouseEvent) {
    event.stopPropagation();
    if (this.filterMode) { this.selected = null; }
    if (this.showClearButton) { this.collapse(); }
    this.value = '';
    this.OnClear.emit();
    this.OnChange.emit(this.value);
  }

  public onBlur() {
    if (!(this.selected && this.filterMode)) {
      this.OnBlur.next(this.value);
    }
  }

  public override onExpand() {
    if (this.showClearButton) { this.isShowClear = true; }
  }


  public override onClose() {
    if (this.showClearButton) { this.isShowClear = false; }
  }
}
