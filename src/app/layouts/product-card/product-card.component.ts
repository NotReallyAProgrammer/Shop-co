import { Component, Input } from '@angular/core';
import { carousellData } from '../carousell/carousell-data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() carousellInfo = carousellData;
  @Input() maxRating: Number = 5;
  maxRatingarr: any = [];

  ngOnInit() {
    this.maxRatingarr = Array(this.maxRating).fill(0);
  }
}
