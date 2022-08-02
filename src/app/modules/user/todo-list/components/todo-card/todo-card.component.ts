import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '@user/shared/services/user.service';
import { Todo } from '@user/todo-list/todo-list.model';
import { BaseComponent } from '@utilities/base/base-component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent extends BaseComponent {

  @Input() todo!: Todo;

  constructor($user: UserService) {
    super($user);
  }

}
