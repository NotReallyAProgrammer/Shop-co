import { Component, inject, signal } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart.service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  discount: number = 20;
  voucherCode: string = 'thisbutafakevoucher';
  shippingFee: number = 5;

  total: number = 0;

  cartService = inject(CartServiceService);
  constructor() {}

  // Quantity

  // Delete Cart
  deleteCart(item: any): void {
    this.cartService.cartDelete(item);
  }
}
