import { NgOptimizedImage } from '@angular/common';
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
    console.log(isPresent);

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
    this.cartData = this.cartData.filter((i) => i.id !== item.id);
  }

  addQuantity(id: number) {
    let item = this.cartData.find((i) => i.id === id);

    if (item) {
      item.productQuantity++;
    }
    // this.cartData.forEach((item) => {
    //   item.productQuantity++;
    // });
  }

  decreaseQuantity(id: number) {
    let item = this.cartData.find((i) => i.id === id);

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
