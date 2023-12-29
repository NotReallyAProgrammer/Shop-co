import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clothesInventory } from 'src/app/dummy-data/clothes-data';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  productId!: number;
  clotheInfo: any;
  clothesData = clothesInventory;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      let id = value.get('id');
      this.productId = Number(id);

      this.clotheInfo = this.clothesData[this.productId];
    });
  }
}
