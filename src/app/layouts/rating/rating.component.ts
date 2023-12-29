import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  maxRatingarr: any = [];
  maxRating: Number = 5;

  @Input() productRating!: any;
  ngOnInit(): void {
    this.maxRatingarr = Array(this.maxRating).fill(0);
  }
}
