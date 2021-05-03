import { Directive, ElementRef, Input } from '@angular/core';

// THIS IS AN ATTRIBUTE DIRECTIVE
@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // Doesn't work because it is created before it can be bound.
  // @Input('appClass') classnames: string;

  constructor(private el: ElementRef) {}

  /* @Input('appClass') set classnames(className: string) {
    // Binds the property to the directive
    this.el.nativeElement.classList.add(className);
  } */

  // Loops through the property obj and upon true will apply the class
  @Input('appClass') set classnames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.el.nativeElement.classList.add(key);
      } else {
        this.el.nativeElement.classList.remove(key);
      }
    }
  }
}
