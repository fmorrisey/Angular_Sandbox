import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'johannes donner';
  todaysDate = new Date();

  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'mushroom'],
    size: 'Large',
  };
}
