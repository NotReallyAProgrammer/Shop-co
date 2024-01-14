import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clothesInventory } from 'src/app/dummy-data/clothes-data';
import { commentsData } from 'src/app/dummy-data/comment-data';

import { Cart } from 'src/app/models/cart';
import { CartServiceService } from 'src/app/services/cart.service.service';

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
  productDisc!: string;
  sizeSelected!: string;
  cartStatus: boolean = false;
  imgActive: boolean = false;

  imgStorage = [
    {
      imgUrl: '',
      selected: false,
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/3589737/pexels-photo-3589737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      selected: false,
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/12446409/pexels-photo-12446409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      selected: false,
    },
  ];

  mainImage!: string;
  customerComment = commentsData;
  cartService = inject(CartServiceService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      let id = value.get('id');
      this.productId = Number(id);

      this.clotheInfo = this.clothesData[this.productId];
    });

    this.sizeSelected = this.clotheInfo.clotheSize[0].size;
    this.clotheInfo.clotheSize[0].selected = true;
    this.imgStorage[0].imgUrl = this.clotheInfo.clotheImgUrl;
    this.imgStorage[0].selected = true;
    this.mainImage = this.clotheInfo.clotheImgUrl;
  }

  mainImg(img: any, index: number) {
    this.mainImage = img;

    this.imgStorage[index].selected = true;
    for (let i = 0; i < this.imgStorage.length; i++) {
      if (i != index) {
        this.imgStorage[i].selected = false;
      }
    }
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
    this.cartAnimation();

    let name = this.clotheInfo.clotheName.toString().replace(/\s/g, '');
    this.productDisc = name + this.sizeSelected + 'Black';

    if (this.cartService.cartData) {
      let newCart: Cart = {
        productId: this.productDisc,
        productImg: this.clotheInfo.clotheImgUrl,
        productName: this.clotheInfo.clotheName,
        productColor: 'Black',
        productSize: this.sizeSelected,
        productPrice: this.clotheInfo.clothePrice,
        productQuantity: this.quantity,
      };
      this.cartService.addCart(newCart);
    }
  }

  //cart animation
  cartAnimation(): void {
    this.cartStatus = !this.cartStatus;
    setTimeout(() => {
      this.cartStatus = !this.cartStatus;
    }, 3000);
  }
}
