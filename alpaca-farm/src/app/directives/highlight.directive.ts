import {
  Directive, Input, ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  {
  @Input() appHighlight = 'yellow';

  constructor(
    private el: ElementRef
  ) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
