import { Component } from '@angular/core';
import { SortingType } from '@user/todo-list/todo-list.model';
import { BaseComponent } from '@utilities/base/base-component';
import { OverlayService } from '@shared/overlay/overlay.service';
import { AddTodoDialogComponent } from '@user/todo-list/components/add-todo-dialog/add-todo-dialog.component';
import { UserService } from '@user/shared/services/user.service';
import { TodoListService } from '@user/todo-list/todo-list.service';
import { ITodo } from '@utilities/interfaces/user.interface';
import {
  IAddTodoListDialog,
  Todo,
  TodoListAction as Action
} from '@user/todo-list/todo-list.model';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent extends BaseComponent {
  get sortingType() { return SortingType; }
  get todos(): Todo[] {
    const Datas = this.filter ? this.datas.filter(({ title }) => title.includes(this.filter!)) : this.datas;
    return this.sorting ? Datas.sort((a, b) => this.sorting === SortingType.AscendingByCreateTime ?
      a.createDate > b.createDate ? 1 : -1 :
      a.createDate > b.createDate ? -1 : 1) : Datas;
  }
  constructor(
    $user: UserService,
    private $overlay: OverlayService,
    private $feature: TodoListService
  ) {
    super($user);
  }

  public sorting?: SortingType;
  public filter?: string;
  public datas: Todo[] = [];

  protected override onInit(): void {
    this.refetch();
  }

  public toggleAddTodoDialog() {
    this.$overlay.toggleDialog<IAddTodoListDialog>(AddTodoDialogComponent, {
      config: {
        user: this.user!
      },
      size: this.sizes.Large,
      callbacks: {
        confirm: () => this.refetch()
      }
    })
  }

  public refetch() {
    this.$feature.fireEvent<ITodo[]>({
      action: Action.FetchTodoList,
      uid: this.user!.uid
    }).then(list => this.datas = list.map(todo => new Todo(todo)));
  }


}
