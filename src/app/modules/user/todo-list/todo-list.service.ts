import { Injectable } from '@angular/core';
import { FeatureService } from '@utilities/abstract/feature-service.abstract';
import {
  TodoListAction as Action,
  ITodoListEvent as Event
} from '@user/todo-list/todo-list.model';
import { LoggerService } from '@shared/services/logger.service';
import { UserCenterService } from '@shared/services/user-center.service';
import { IUser } from '@utilities/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoListService extends FeatureService<Event, Action> {

  constructor(
    logger: LoggerService,
    private $userCenter: UserCenterService
  ) {
    super(logger);
  }

  protected featureName: string = 'TodoList';
  protected resolveAction({
    action,
    input,
    user
  }: Event): Promise<any> {
    return new Promise(resolve => {
      switch (action) {
        case Action.FetchTodoList: this.$userCenter.fetchUser(user!.uid).then(({ todoList }) => resolve(todoList)); break;
        case Action.SubmitTodo:
          const UserInfo: IUser = user!.getUserData();
          UserInfo.todoList!.push(input!);
          resolve(this.$userCenter.updateUserProfile(UserInfo, UserInfo.uid));
          break;
      }
    });
  }
}
