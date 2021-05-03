import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoop]',
})
export class LoopDirective {
  constructor(
    private viewContainer: ViewContainerRef, // Exposes methods for removing and inserting elements
    private templateRef: TemplateRef<any> // provides a reference to which the children area attached
  ) {}

  // Checks for a property called [appLoop]
  @Input('appLoop') set render(steps: number) {
    // Steps para
    this.viewContainer.clear(); // Creates a clean slate before content insert

    for (let step = 0; step < steps; step++) {
      // Runs until the step var exceeds the steps para
      this.viewContainer.createEmbeddedView(this.templateRef, {
        // Inserting a new element
        index: step,
      });
    }
  }
}
