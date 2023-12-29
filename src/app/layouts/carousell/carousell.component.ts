import { Component, Input } from '@angular/core';
import { carousellData } from './carousell-data';
import { clothesInventory } from 'src/app/dummy-data/clothes-data';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css'],
})
export class CarousellComponent {
  @Input() carousellInfo = clothesInventory;
  @Input() maxRating: Number = 5;
  maxRatingarr: any = [];

  ngOnInit() {
    this.maxRatingarr = Array(this.maxRating).fill(0);
  }
}
