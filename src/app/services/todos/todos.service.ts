import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private readonly endpointUrl: string = 'http://localhost:3000/660/todos';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  public getTodos(): Observable<Todo[]> {
    const motoboy: Observable<Todo[]> = 
      this.httpClient.get<Todo[]>(this.endpointUrl);

    return motoboy;
  }

  public postTodo(todo: Todo): Observable<Todo> {
    const motoboy: Observable<Todo> =
      this.httpClient.post<Todo>(this.endpointUrl, todo);

    return motoboy;
  }

  public deleteTodo(id: number): Observable<void> {
    const todoUrl = this.endpointUrl + '/' + id;

    const motoboy: Observable<void> =
      this.httpClient.delete<void>(todoUrl)

    return motoboy;
  }
}


