import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clothesInventory } from 'src/app/dummy-data/clothes-data';
import { commentsData } from 'src/app/dummy-data/comment-data';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  productId!: number;
  clotheInfo: any;
  clothesData = clothesInventory;
  quantity: number = 1;

  sizeSelected!: string;

  customerComment = commentsData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      let id = value.get('id');
      this.productId = Number(id);

      this.clotheInfo = this.clothesData[this.productId];
    });
  }

  // Color Selection
  selectedColor(index: any): void {
    this.clotheInfo.clotheColor[index].selected =
      !this.clotheInfo.clotheColor[index].selected;

    for (let i = 0; i < this.clotheInfo.clotheColor.length; i++) {
      if (i != index) {
        this.clotheInfo.clotheColor[i].selected = false;
      }
    }
  }

  // Size
  selectedSize(index: any): void {
    this.clotheInfo.clotheSize[index].selected =
      !this.clotheInfo.clotheSize[index].selected;
    this.sizeSelected = this.clotheInfo.clotheSize[index].size;
    for (let i = 0; i < this.clotheInfo.clotheSize.length; i++) {
      if (i != index) {
        this.clotheInfo.clotheSize[i].selected = false;
      }
    }
  }

  // Quantity
  plusQty(): void {
    this.quantity = this.quantity + 1;
  }

  minusQty(): void {
    this.quantity = this.quantity - 1;
  }

  //
  addToCart() {
    console.log(this.productId, this.quantity, this.sizeSelected);
  }
}
