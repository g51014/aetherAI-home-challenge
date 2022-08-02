import { User } from "@user/shared/models/user.model";
import { IEvent } from "@utilities/interfaces/common.interface";
import { ITodo } from "@utilities/interfaces/user.interface";

export enum TodoListAction {
  FetchTodoList,
  SubmitTodo
}

export interface IAddTodoListDialog {
  user: User
}

export interface ITodoListEvent extends IEvent<TodoListAction> {
  input?: ITodo;
  user?: User;
}

export enum SortingType {
  AscendingByCreateTime = '建立時間由舊至新',
  DescendingByCreateTime = '建立時間由新至舊'
}

export class Todo implements ITodo {
  constructor(data: ITodo) {
    Object.assign(this, data);
  }

  public id!: string;
  public title!: string;
  public completed!: boolean;
  public createDate!: Date;
  public description?: string;

  public getTodoInput(): ITodo {
    return ({
      id: this.id,
      title: this.title,
      completed: this.completed || false,
      createDate: this.createDate || new Date(),
      description: this.description || ''
    });
  }
}
