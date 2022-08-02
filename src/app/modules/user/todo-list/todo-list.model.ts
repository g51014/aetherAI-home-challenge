import { User } from "@user/shared/models/user.model";
import { EStatus } from "@utilities/enums/common.enum";
import { TimeHelper } from "@utilities/helper/time-helper";
import { IEvent } from "@utilities/interfaces/common.interface";
import { ITodo, IUser } from "@utilities/interfaces/user.interface";

export enum TodoListAction {
  FetchTodoList = 1,
  SubmitTodo,
  EditTodo,
  DeleteTodo
}

export interface IAddTodoListDialog {
  user: User;
  todo?: Todo;
}

export interface ITodoListEvent extends IEvent<TodoListAction> {
  input?: ITodo;
  uid?: string;
}

export enum SortingType {
  AscendingByCreateTime = '建立時間由舊至新',
  DescendingByCreateTime = '建立時間由新至舊'
}

export class Todo implements ITodo {

  get status(): EStatus {
    return this.completed ? EStatus.Closed : EStatus.Active;
  }

  get statusText(): string {
    return this.completed ? '已完成' : '未完成';
  }

  constructor(data: ITodo) {
    Object.assign(this, data);
  }

  public id!: string;
  public title!: string;
  public completed!: boolean;
  public createDate!: string;
  public description?: string;

  public getTodoInput(): ITodo {
    return ({
      id: this.id,
      title: this.title,
      completed: this.completed || false,
      createDate: this.createDate || TimeHelper.currentDateTime,
      description: this.description || ''
    });
  }
}
