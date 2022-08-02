import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@shared/services/firebase.service';


@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {

  constructor(
    private $fb: FirebaseService
  ) { }

  ngOnInit(): void {

  }

}
