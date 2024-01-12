import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartData: Array<any> = [];

  constructor() {}

  addCart(data: any) {
    // let isPresent = this.cartData.some(function (el: any) {
    //   return el.productId == data.productId;
    // });
    // console.log(isPresent);

    // if (isPresent) {
    //   let id = this.cartData.filter(data.productId);
    //   console.log(id);
    // }

    this.cartData.push(data);
    console.log(this.cartData);
  }
}
