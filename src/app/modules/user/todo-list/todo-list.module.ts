import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';


@NgModule({
  declarations: [
    TodoListPageComponent,
    TodoCardComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ]
})
export class TodoListModule { }
