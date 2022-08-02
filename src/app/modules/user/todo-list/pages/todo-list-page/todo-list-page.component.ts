import { IAddTodoListDialog, Todo } from '@user/todo-list/todo-list.model';
import { Component } from '@angular/core';
import { SortingType } from '@user/todo-list/todo-list.model';
import { BaseComponent } from '@utilities/base/base-component';
import { OverlayService } from '@shared/overlay/overlay.service';
import { AddTodoDialogComponent } from '@user/todo-list/components/add-todo-dialog/add-todo-dialog.component';
import { UserService } from '@user/shared/services/user.service';


@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent extends BaseComponent {
  get sortingType() { return SortingType; }
  constructor(
    $user: UserService,
    private $overlay: OverlayService
  ) {
    super($user);
  }

  public sorting?: SortingType;
  public datas: Todo[] = [];

  public toggleAddTodoDialog() {
    this.$overlay.toggleDialog<IAddTodoListDialog>(AddTodoDialogComponent, {
      config: {
        user: this.user!
      },
      size: this.sizes.Large
    })
  }


}
