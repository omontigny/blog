import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Posts';
  postsList: any = [
    {
      title: 'Mon Premier Post',
      content: 'lorem Ipsum lorem Ipsum lorem Ipsum',
      loveIts: 1,
    },
    {
      title: 'Mon Deuxième Post',
      content: 'lorem Ipsum lorem Ipsum lorem Ipsum',
      loveIts: 0,
    },
    {
      title: 'Mon troisième Post',
      content: 'lorem Ipsum lorem Ipsum lorem Ipsum',
      loveIts: -1,
    },
  ]; // array of all posts
}
