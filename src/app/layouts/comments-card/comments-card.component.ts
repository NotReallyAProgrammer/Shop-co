import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments-card',
  templateUrl: './comments-card.component.html',
  styleUrls: ['./comments-card.component.css'],
})
export class CommentsCardComponent {
  @Input() customersComment: any;
  @Input() maxRating: Number = 5;
  maxRatingarr: any = [];

  ngOnInit() {
    this.maxRatingarr = Array(this.maxRating).fill(0);
  }
}
