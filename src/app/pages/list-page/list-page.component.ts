import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces';
import { TodosService } from 'src/app/services';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor(
    todosService: TodosService
  ) {
    this.todosService = todosService
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  private todosService: TodosService;

  public todos: Todo[] = [];

  public showMessage: boolean;

  public readonly pageTitle: string = 'Meus Todos';

  public addNewTodo() {
    // const newTodo = new Todo(4, 'new Todo')
    const newTodo: Todo = { id: this.onSum(2, 2), message: 'new Todo' }

    this.todos.push(newTodo)
  }

  public onDeleteTodo(id): void {
    console.log('o id é:  ', id);
  }

  public onShow(event: Event) {
    console.log(event)
  }

  private onSum(a: number, b: number): number {
    return a + b;
  }

}
