import { Component, Input, OnInit } from '@angular/core';
import { EStatus } from '@utilities/enums/common.enum';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input() status: EStatus = EStatus.Active;
  @Input() theme: 'light' | 'dark' = 'light';


  constructor() { }

  ngOnInit(): void {
  }

}
