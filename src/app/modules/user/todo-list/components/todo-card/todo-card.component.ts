import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverlayService } from '@shared/overlay/overlay.service';
import { UserService } from '@user/shared/services/user.service';
import { Todo } from '@user/todo-list/todo-list.model';
import { TodoListService } from '@user/todo-list/todo-list.service';
import { BaseComponent } from '@utilities/base/base-component';
import {
  TodoListAction as Action
} from '@user/todo-list/todo-list.model';
import { ITodo } from '@utilities/interfaces/user.interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent extends BaseComponent {

  @Input() todo!: Todo;
  @Output() refresh = new EventEmitter<void>();

  constructor(
    $user: UserService,
    private $feature: TodoListService,
    private $overlay: OverlayService
  ) {
    super($user);
  }

  public edit() {

  }

  public delete() {
    this.$feature.fireEvent<boolean>({
      action: Action.DeleteTodo,
      uid: this.user!.uid,
      input: { id: this.todo.id } as ITodo
    }).then(() => this.refresh.emit());
  }

}
