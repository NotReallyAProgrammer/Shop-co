import { interval as observableInterval } from 'rxjs';
import { takeWhile, scan, tap } from 'rxjs/operators';

import { Component, Input, HostListener } from '@angular/core';
import { clothesInventory } from 'src/app/dummy-data/clothes-data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  filterOpen: boolean = false;
  scrWidth!: number;

  mainProduct = clothesInventory;
  total: number = this.mainProduct.length;
  pageNumber!: number;

  //Pagination
  @Input() currentPage: number = 1;

  @Input() limit: number = 9;
  // @Output() changePage = new EventEmitter<number>();
  pages: number[] = [];
  value!: string;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrWidth = window.innerWidth;

    if (this.scrWidth >= 760) {
      this.filterOpen = true;
    } else {
      this.filterOpen = false;
    }
  }

  ngOnInit() {
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pageNumber = pagesCount;
    this.pages = this.range(1, pagesCount);
    this.getScreenSize();
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

  changePage(page: any, el: any): void {
    this.currentPage = page;

    // el.scrollToTop = 0;
    // const duration = 600;
    // const interval = 5;
    // const move = (el.scrollToTop * interval) / duration;
    // observableInterval(interval)
    //   .pipe(
    //     scan((acc, curr) => acc - move, el.scrollTop),
    //     tap((position) => (el.scrollTop = position)),
    //     takeWhile((val) => val > 0)
    //   )
    //   .subscribe();
  }

  prevPage(el: any): void {
    this.currentPage = this.currentPage - 1;

    const duration = 600;
    const interval = 5;
    const move = (el.scrollTop * interval) / duration;
    observableInterval(interval)
      .pipe(
        scan((acc, curr) => acc - move, el.scrollTop),
        tap((position) => (el.scrollTop = position)),
        takeWhile((val) => val > 0)
      )
      .subscribe();
  }

  nextPage(el: any): void {
    this.currentPage = this.currentPage + 1;

    el.scrollTop = 0;
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
