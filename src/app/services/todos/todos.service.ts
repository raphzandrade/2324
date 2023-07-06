import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [
    { id: 1, message: 'o que eu tenho que fazer' },
    { id: 2, message: 'o que eu tenho que fazer' },
    { id: 3, message: 'o que eu tenho que fazer' }
  ]

  constructor() { }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public saySomething(): void {
    console.log('I will not say nothing.');
  }
}
