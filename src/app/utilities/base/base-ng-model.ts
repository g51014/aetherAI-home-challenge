import { Injectable, forwardRef, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BaseComponent } from '@utilities/base/base-component';

export function getNgModelProvider(component: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true
  };
}

@Injectable()
export class BaseModel<T> extends BaseComponent implements ControlValueAccessor {

  constructor() {
    super();
  }

  public model!: T;
  public disabled = false;
  private onChange!: (value: any) => {};
  private firstChange = true;


  writeValue(value: T) {
    this.model = value;
    this.onModelChanged({
      value,
      isFirstChange: this.firstChange
    });
    this.firstChange = false;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() { }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public notifyValueChange(value?: any) {
    if (this.onChange) {
      if (typeof value === 'boolean') {
        this.onChange(value);
      } else {
        this.onChange(value || this.model);
      }
    }
  }

  protected onModelChanged({ value, isFirstChange }: { value: T, isFirstChange: boolean }) { };

}
