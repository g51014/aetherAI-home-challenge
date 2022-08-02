import { Component, Input } from '@angular/core';
import { BaseModel, getNgModelProvider } from '@utilities/base/base-ng-model';


@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [getNgModelProvider(RadioButtonComponent)]
})
export class RadioButtonComponent extends BaseModel<any> {
  @Input() group?: string;
  @Input() value: any;

  constructor() {
    super();
  }

  get name(): string { return this.group || 'radio-btn-group'; }
  get id(): string { return `${this.group}-${this.value}`; }

}
