import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'components';

  posts = [
    {
      img: 'https://picsum.photos/100',
      author: 'John',
      title: 'Title #1',
    },
    {
      img: 'https://picsum.photos/100',
      author: 'Mike',
      title: 'Title #2',
    },
    {
      img: 'https://picsum.photos/100',
      author: 'Jane',
      title: 'Title #3',
    },
  ];
}
