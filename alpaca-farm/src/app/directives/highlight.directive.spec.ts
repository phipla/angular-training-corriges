import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let mockElementRef: ElementRef;
  let directive: HighlightDirective;

  beforeEach(() => {
    mockElementRef = <ElementRef>{
      nativeElement: { style: {} }
    };
    directive = new HighlightDirective(mockElementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('onMouseEnter should set the background', () => {
    // When the directive has a value in appHighlight
    directive.appHighlight = 'test-value';
    // And onMouseEnter is called
    directive.onMouseEnter();
    // Then the background should be set to appHighlight
    expect(mockElementRef.nativeElement.style.backgroundColor)
      .toBe('test-value');
  });
});
