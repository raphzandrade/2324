import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces';
import { TodosPushBasedService } from 'src/app/services/todos-push-based/todos-push-based.service';

@Component({
  selector: 'app-list-page-push-based',
  templateUrl: './list-page-push-based.component.html',
  styleUrls: ['./list-page-push-based.component.scss']
})
export class ListPagePushBasedComponent implements OnInit {

  public todosObs: Observable<Todo[]>;

  constructor(
    private todosPBService: TodosPushBasedService
  ) {
    this.todosObs = this.todosPBService.todos;
  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  public refreshTodos(): void {
    this.todosPBService.getTodos();
  }
}
