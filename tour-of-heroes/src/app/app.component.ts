import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';

  public randFunc() {
    let num1: number = 1;
    let num2: number = 2;

    let result = num1 + num2;
    console.log('Calculation', result);
    return result;
  }
}
