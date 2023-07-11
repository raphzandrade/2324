import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces';
import { TodosService } from 'src/app/services';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  // :Type
  public todos: Todo[] = [];

  public readonly pageTitle: string = 'Meus Todos';

  public showErrorMessage: boolean = false;
  public errorMessage: string = 'Erro desconhecido';

  public count: number = 0;
  public countSubject: Subject<number> = new Subject()

  constructor(
    private todosService: TodosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.todosService
      .getTodos()
      .subscribe((pacote) => {
        this.todos = pacote;
      })
  }

  public addToCount(count: number): void {
    const newCount = count + 1;

    this.countSubject.next(newCount);
  }

  public addNewTodo(): void {
    this.router.navigateByUrl('/cadastro');
  }

  public onDeleteTodo(id: number): void {
    this.todosService.deleteTodo(id).subscribe(
      () => {
        const index = this.todos.findIndex((value: Todo) => { value.id = id })

        this.todos = this.todos.splice(index, 1)
      }
    )
  }
}
