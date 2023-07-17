import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Todo } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosPushBasedService {

  public todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  private readonly endpointUrl: string = 'http://localhost:3000/todos';

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTodos(): void {
    /** Enviando o SMS cancelando nosso pedido */
    this.unsubscribe.next();

    const motoboy: Observable<Todo[]> = this.httpClient.get<Todo[]>(this.endpointUrl);
    const motoboy2: Observable<unknown> = this.httpClient.get<unknown>('other endpoint');

    motoboy
      .pipe(
        /** Dizendo para o motoboy cancelar o pedido caso ele receba um sms */
        takeUntil(this.unsubscribe)
      )
      .subscribe((pacote) => {
        this.todos.next(pacote);
      })
  }
}
