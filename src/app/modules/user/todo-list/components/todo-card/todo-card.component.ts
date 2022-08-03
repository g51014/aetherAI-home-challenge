import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverlayService } from '@shared/overlay/overlay.service';
import { UserService } from '@user/shared/services/user.service';
import { IAddTodoListDialog, Todo } from '@user/todo-list/todo-list.model';
import { TodoListService } from '@user/todo-list/todo-list.service';
import { BaseComponent } from '@utilities/base/base-component';
import {
  TodoListAction as Action
} from '@user/todo-list/todo-list.model';
import { ITodo } from '@utilities/interfaces/user.interface';
import { AddTodoDialogComponent } from '@user/todo-list/components/add-todo-dialog/add-todo-dialog.component';

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

  /**敘述換行符號轉換為html標籤 */
  public formatDescriptionHtml(description?: string): string {
    return description?.replace(/\n/g, '<br>') || '-';
  }

  public edit() {
    this.$overlay.toggleDialog<IAddTodoListDialog>(AddTodoDialogComponent, {
      size: this.sizes.Large,
      config: {
        user: this.user!,
        todo: this.todo
      },
      callbacks: {
        confirm: () => this.refresh.emit()
      }
    })
  }

  public delete() {
    this.$feature.fireEvent<boolean>({
      action: Action.DeleteTodo,
      uid: this.user!.uid,
      input: { id: this.todo.id } as ITodo
    }).then(() => this.refresh.emit());
  }

}
