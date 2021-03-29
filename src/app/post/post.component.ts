import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input() title: string = '';
    @Input() content: string = '';
    @Input() loveIts: number = 0;
    created_at: Date;

  constructor() {
    this.created_at = new Date();
  }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.title;
  }
  getContent(): string{
    return this.content;
  }

  getPostDate(){
    return this.created_at;
  }

  getLoves() {
    return this.loveIts;
  }

  increaseLoves(): void {
    this.loveIts += 1;
  }

  decreaseLoves(): void {
    this.loveIts -= 1;
  }

}
