import { Component, EventEmitter, Input, Output } from '@angular/core';
import { clothesInventory } from 'src/app/dummy-data/clothes-data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  filterOpen: boolean = true;

  mainProduct = clothesInventory;
  total: number = this.mainProduct.length;

  //Pagination
  @Input() currentPage: number = 1;

  @Input() limit: number = 9;
  // @Output() changePage = new EventEmitter<number>();
  pages: number[] = [];

  ngOnInit() {
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pagesCount);
  }

  isFilterClose(status: any): void {
    this.filterOpen = status;
  }
  isFilterOpen() {
    if (this.filterOpen === false) {
      this.filterOpen = true;
    } else {
      this.filterOpen = false;
    }
  }

  changePage(page: any): void {
    this.currentPage = page;
  }

  prevPage(): void {
    this.currentPage = this.currentPage - 1;
  }

  nextPage(): void {
    this.currentPage = this.currentPage + 1;
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
