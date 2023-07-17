import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces';
import { TodosService } from 'src/app/services';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss']
})
export class DirectivesPageComponent implements OnInit {
  public option: string = 'initial';

  public optionNumber: number = 0;

  public color: string = 'blue';
  public itsBlue: boolean = true;
  public displayText: string = 'none';

  public dateNow: Date = new Date();
  public lowerCaseText: string = 'lower case text';
  public upperCaseText: string = 'UPPER CASE TEXT';
  public price: number = 10;
  
  private counter: number = 0;

  public countSubject: BehaviorSubject<number> = new BehaviorSubject(this.counter)

  public todosObservable: Observable<Todo[]>;

  constructor(
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.todosObservable = this.todosService.getTodos()
  }

  public incrementCount(): void {
    this.counter = this.counter + 1;

    this.countSubject.next(this.counter)
  }

  public changeOption(): void {
    this.option = 'secondary option'
  }

  public onIncrementOption(): void {
    this.optionNumber = this.optionNumber + 1;
  }

  public changeColor(): void {
    this.color = 'green';
  }

  public toggleBlue(): void {
    this.itsBlue = !this.itsBlue;
  }

  public displayParagraph(): void {
    this.displayText = 'block';
  }
}
