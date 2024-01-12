import { Component, signal } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart.service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  quantity: number = 1;
  discount: number = 20;
  price: number = 233;
  shippingFee: number = 15;

  total!: number;

  constructor(public cartService: CartServiceService) {}

  ngOnInit() {
    var sum;
    this.cartService.cartData.forEach(function (val) {
      sum = val.productPrice + val.productPrice;
    });

    if (sum) {
      this.total = sum;
    }
  }
  // Quantity
  plusQty(): void {
    this.quantity = this.quantity + 1;
  }

  minusQty(): void {
    this.quantity = this.quantity - 1;
  }
}
