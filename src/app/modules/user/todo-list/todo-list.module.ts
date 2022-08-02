import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TodoListPageComponent,
    TodoCardComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    SharedModule
  ]
})
export class TodoListModule { }
