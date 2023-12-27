import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import {
  clotheType,
  clotheColor,
  clotheSize,
  clotheStyle,
} from './filter-data';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css'],
})
export class FilterTabComponent {
  clotheTypes = clotheType;
  colorFilter = clotheColor;
  sizeFilter = clotheSize;
  styleFilter = clotheStyle;

  priceForDisplay: number = 0.0;

  minInputVal = new FormControl();
  maxInputVal = new FormControl();

  // for Input
  // inputMinVal = new FormControl();
  // inputMaxVal = new FormControl();

  minGap: number = 0;
  minVal: number = 1000;
  maxVal: number = 10000;

  sliderMaxVal: number = 20000;
  sliderMinval: number = 0;

  //

  @Input() filterStatus!: boolean;
  @Output() onFilterStatus = new EventEmitter<any>();
  isPriceOpen: boolean = false;
  isColorsOpen: boolean = false;
  isSizesOpen: boolean = false;
  isStyleOpen: boolean = false;

  constructor() {
    this.minInputVal.valueChanges.subscribe((values) => {
      this.minVal = values;
    });

    //for input
    // this.inputMinVal.valueChanges.subscribe((values) => {
    //   this.minVal = values;
    // });

    this.maxInputVal.valueChanges.subscribe((values) => {
      this.maxVal = values;
    });

    //for input
    // this.inputMaxVal.valueChanges.subscribe((values) => {
    //   this.maxVal = values;
    // });
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
  isFilterOpen(): void {
    if (this.filterStatus === true) {
      this.filterStatus = !this.filterStatus;
    }

    this.onFilterStatus.emit(this.filterStatus);
  }

  priceOpen(): void {
    if (this.isPriceOpen == false) {
      this.isPriceOpen = true;
    } else {
      this.isPriceOpen = false;
    }
  }

  colorsOpen(): void {
    if (this.isColorsOpen == false) {
      this.isColorsOpen = true;
    } else {
      this.isColorsOpen = false;
    }
  }

  sizesOpen(): void {
    if (this.isSizesOpen == false) {
      this.isSizesOpen = true;
    } else {
      this.isSizesOpen = false;
    }
  }

  styleOpen(): void {
    if (this.isStyleOpen == false) {
      this.isStyleOpen = true;
    } else {
      this.isStyleOpen = false;
    }
  }

  selectedColor(index: any): void {
    this.colorFilter[index].selected = !this.colorFilter[index].selected;
    for (let i = 0; i < this.colorFilter.length; i++) {
      if (i != index) {
        this.colorFilter[i].selected = false;
      }
    }
  }

  selectedSize(index: any): void {
    this.sizeFilter[index].selected = !this.sizeFilter[index].selected;
  }
}
