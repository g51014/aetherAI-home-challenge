import { Todo } from '@user/todo-list/todo-list.model';
import { Component } from '@angular/core';
import { SortingType } from '@user/todo-list/todo-list.model';
import { BaseComponent } from '@utilities/base/base-component';


@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent extends BaseComponent {
  get sortingType() { return SortingType; }
  constructor(

  ) {
    super();
  }

  public sorting?: SortingType;
  public datas: Todo[] = [];


}
