import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';



@NgModule({
  declarations: [
    TodoCardComponent
  ],
  exports: [
    TodoCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
