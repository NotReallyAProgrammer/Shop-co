import { Component, Input } from '@angular/core';
import { clotheType } from './filter-data';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  clotheTypes = clotheType;

  priceForDisplay: number = 0.0;

  minInputVal = new FormControl();
  maxInputVal = new FormControl();
  inputMinVal = new FormControl();
  inputMaxVal = new FormControl();

  minGap: number = 0;
  @Input() minVal: number = 1000;
  @Input() maxVal: number = 10000;

  sliderMaxVal: number = 20000;
  sliderMinval: number = 0;

  constructor() {
    this.minInputVal.valueChanges.subscribe((values) => {
      this.minVal = values;
    });

    this.inputMinVal.valueChanges.subscribe((values) => {
      this.minVal = values;
    });

    this.maxInputVal.valueChanges.subscribe((values) => {
      this.maxVal = values;
    });

    this.inputMaxVal.valueChanges.subscribe((values) => {
      this.maxVal = values;
    });
  }

  slideMin() {
    let gap = this.maxVal - this.minVal;

    if (gap <= this.minGap) {
      this.minVal = this.maxVal - this.minGap;
    }
  }
  slideMax() {
    let gap = this.maxVal - this.minVal;

    if (gap <= this.minGap) {
      this.maxVal = this.maxVal + this.minGap;
    }
  }
}
