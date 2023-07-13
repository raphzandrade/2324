import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() public appHighlight: string = '';

  private defaultBackgroundColor: string = 'yellow';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 
    this.elementRef.nativeElement.style.padding = '5px';
    this.elementRef.nativeElement.style.borderRadius = '99px';
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    const color = this.appHighlight || this.defaultBackgroundColor;

    this.changeBackgroundColor(color);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.changeBackgroundColor('transparent');
  }

  private changeBackgroundColor(color: string): void {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
