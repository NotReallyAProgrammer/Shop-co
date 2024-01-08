import { Component } from '@angular/core';

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

  // Quantity
  plusQty(): void {
    this.quantity = this.quantity + 1;
  }

  minusQty(): void {
    this.quantity = this.quantity - 1;
  }
}
