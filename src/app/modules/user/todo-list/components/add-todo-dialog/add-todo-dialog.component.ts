import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '@shared/overlay/dialog/dialog.component';
import { OverlayService } from '@shared/overlay/overlay.service';
import { TodoListService } from '@user/todo-list/todo-list.service';
import { BaseDialog } from '@utilities/base/base-dialog';
import {
  IAddTodoListDialog,
  Todo,
  TodoListAction as Action
} from '@user/todo-list/todo-list.model';
import { TimeHelper } from '@utilities/helper/time-helper';
@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent extends BaseDialog<IAddTodoListDialog> {
  get uid(): string { return this.params.config!.user.uid; }
  constructor(
    $overlay: OverlayService, dialog: DialogComponent,
    private fb: FormBuilder,
    private $feature: TodoListService
  ) {
    super($overlay, dialog);
  }

  public form: FormGroup = this.fb.group({
    id: `${this.uid}${TimeHelper.currentDateTime}`,
    title: [null, Validators.required],
    description: [null]
  });

  public submit() {
    this.$feature.fireEvent<boolean>({
      action: Action.SubmitTodo,
      input: new Todo(this.form.getRawValue()).getTodoInput(),
      user: this.params.config!.user
    }).then(() => this.confirm());
  }

  public autoResized(target: any): void {
    const Target = target as HTMLElement;
    Target.style.height = '80px';
    Target.style.height = `${Target.scrollHeight > 140 ? 140 : Target.scrollHeight}px`;
    if (Target.scrollHeight > 80) {
      Target.classList.add('scroll-bar');
    }
  }
}
