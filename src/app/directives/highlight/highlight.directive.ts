import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { TodosService } from 'src/app/services';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() public appHighlight: string = '';

  @Input() public secondInput: string = ''

  private defaultBackgroundColor: string = 'yellow';

  constructor(
    private elementRef: ElementRef,
  ) { 
    this.elementRef.nativeElement.style.padding = '5px';
    this.elementRef.nativeElement.style.borderRadius = '99px';
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    const color = this.appHighlight || this.defaultBackgroundColor;
    console.log(this.secondInput)

    this.changeBackgroundColor(color);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.changeBackgroundColor('');
  }

  private changeBackgroundColor(color: string): void {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
