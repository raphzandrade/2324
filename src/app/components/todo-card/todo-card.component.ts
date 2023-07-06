import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {
  @Input() todoInput: Todo;

  @Output() delete: EventEmitter<number>;

  constructor() {
    this.delete = new EventEmitter();
  }

  onDelete() {
    this.delete.emit(this.todoInput.id)
  }
}