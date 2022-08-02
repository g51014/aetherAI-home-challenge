import { EStatus } from "@utilities/enums/common.enum";

interface ITodo {
  status: EStatus;
  description?: string;
  createDate: Date;
  title: string;
}

export enum SortingType {
  AscendingByCreateTime = '建立時間由舊至新',
  DescendingByCreateTime = '建立時間由新至舊'
}

export class Todo implements ITodo {
  constructor(data: ITodo) {
    Object.assign(this, data);
  }

  public title!: string;
  public status!: EStatus;
  public createDate!: Date;
  public description?: string;
}
