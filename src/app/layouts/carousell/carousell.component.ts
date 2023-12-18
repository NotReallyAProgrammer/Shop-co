import { Component, Input } from '@angular/core';
import { carousellData } from './carousell-data';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css'],
})
export class CarousellComponent {
  @Input() carousellInfo = carousellData;
  @Input() maxRating: Number = 5;
  maxRatingarr: any = [];

  ngOnInit() {
    this.maxRatingarr = Array(this.maxRating).fill(0);
  }
}
