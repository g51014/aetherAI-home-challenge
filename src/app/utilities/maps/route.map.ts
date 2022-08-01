import { EUserPage } from "@utilities/enums/route.enum";
import { IMenuItem } from "@utilities/interfaces/common.interface";

export const UserPages: Map<EUserPage, IMenuItem> = new Map([
  [EUserPage.TodoList, {
    path: `user/${EUserPage.TodoList}`,
    icon: 'list',
    i18n: '代辦事項'
  }]
])
