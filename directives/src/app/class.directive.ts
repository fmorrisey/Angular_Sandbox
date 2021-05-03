import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {
    console.log('Class Directive ACTIVATED!!!');
    this.element.nativeElement.style.color = 'red';
  }
}
