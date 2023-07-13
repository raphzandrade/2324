import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss']
})
export class DirectivesPageComponent {
  public option: string = 'initial';

  public optionNumber: number = 0;

  public color: string = 'blue';
  public itsBlue: boolean = true;
  public displayText: string = 'none';

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
