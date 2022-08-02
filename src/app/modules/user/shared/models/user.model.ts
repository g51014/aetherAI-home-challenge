import { IUser } from "@utilities/interfaces/user.interface";

export class User implements IUser {
  constructor(data: IUser) {
    Object.assign(this, data);
  }

  public name!: string;
  public lastLoginDate!: string;
  public uid!: string;
}
