import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() storeInventory!: any;
  @Input() maxRating: Number = 5;
  @Input() currentPage!: any;
  maxRatingarr: any = [];

  ngOnInit(): void {
    this.maxRatingarr = Array(this.maxRating).fill(0);
  }
}
