import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { SharedModule } from '@shared/shared.module';
import { AddTodoDialogComponent } from './components/add-todo-dialog/add-todo-dialog.component';


@NgModule({
  declarations: [
    TodoListPageComponent,
    TodoCardComponent,
    AddTodoDialogComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    SharedModule
  ]
})
export class TodoListModule { }
