import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartData: Array<any> = [];

  constructor() {}

  addCart(data: any) {
    let isPresent = this.cartData.some(function (el: any) {
      return el.productId == data.productId;
    });

    if (isPresent) {
      this.cartData.forEach((items) => {
        if (items.productId === data.productId) {
          items.productQuantity++;
        }
      });
    } else {
      this.cartData.push({ ...data, productQuantity: 1 });
    }
  }

  cartDelete(item: any) {
    this.cartData = this.cartData.filter((i) => i.productId !== item.productId);
  }

  addQuantity(id: string) {
    let item = this.cartData.find((i) => i.productId === id);

    if (item) {
      item.productQuantity++;
    }

    // this.cartData.forEach((item) => {
    //   item.productQuantity++;
    // });
  }

  decreaseQuantity(id: string) {
    let item = this.cartData.find((i) => i.productId === id);

    if (item) {
      item.productQuantity--;
    }
  }

  getTotal() {
    return this.cartData.reduce((acc, item) => {
      return acc + item.productPrice * item.productQuantity;
    }, 0);
  }
}
