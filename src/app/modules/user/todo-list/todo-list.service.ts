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
    uid
  }: Event): Promise<any> {
    return new Promise(resolve => {
      switch (action) {
        case Action.FetchTodoList: this.$userCenter.fetchUser(uid!).then(({ todoList }) => resolve(todoList)); break;
        case Action.SubmitTodo:
          this.$userCenter.fetchUser(uid!).then(user => {
            user.todoList!.push(input!);
            resolve(this.$userCenter.updateUserProfile(user, user.uid));
          });
          break;
        case Action.DeleteTodo:
          this.$userCenter.fetchUser(uid!).then(user => {
            user.todoList = user.todoList!.filter(({ id }) => id !== input!.id);
            resolve(this.$userCenter.updateUserProfile(user, user.uid));
          });
          break;
      }
    });
  }


}
