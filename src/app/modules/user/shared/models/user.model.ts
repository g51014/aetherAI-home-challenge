import { ITodo, IUser } from "@utilities/interfaces/user.interface";

export class User implements IUser {
  constructor(data: IUser) {
    Object.assign(this, data);
    if (!data.todoList) {
      this.todoList = [];
    }
  }

  public name!: string;
  public lastLoginDate!: string;
  public uid!: string;
  public todoList?: ITodo[];

  public getUserData(): IUser {
    return ({
      name: this.name,
      uid: this.uid,
      lastLoginDate: this.lastLoginDate,
      todoList: this.todoList
    });
  }
}
