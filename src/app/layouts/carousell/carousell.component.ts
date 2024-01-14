import { Component, HostListener, Inject, Input, inject } from '@angular/core';

import { clothesInventory } from 'src/app/dummy-data/clothes-data';
import { Router } from '@angular/router';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css'],
})
export class CarousellComponent {
  @Input() carousellInfo = clothesInventory;
  @Input() maxRating: Number = 5;
  maxRatingarr: any = [];

  router = inject(Router);
  @HostListener('window:scroll')
  ngOnInit() {
    this.maxRatingarr = Array(this.maxRating).fill(0);
  }

  goToProduct(id: number, name: string) {
    this.goToTop();
    this.router.navigate(['/product', id, name]);
  }

  goToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
