import {
  Component,
  Input,
  HostListener,
  inject,
  ElementRef,
} from '@angular/core';
import { clothesInventory } from 'src/app/dummy-data/clothes-data';
import { ActivatedRoute, Router } from '@angular/router';
import { IsThisOpenService } from 'src/app/services/is-this-open.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  scrWidth!: number;

  mainProduct = clothesInventory;
  total: number = this.mainProduct.length;
  pageNumber!: number;

  categoryName: any;

  id!: string;

  //Pagination
  @Input() currentPage: number = 1;

  limit: number = 9;

  pages: number[] = [];
  value!: string;

  //Injects
  route = inject(ActivatedRoute);
  router = inject(Router);
  isThisOpenServices = inject(IsThisOpenService);
  elRef = inject(ElementRef);

  constructor() {}

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrWidth = window.innerWidth;

    if (this.scrWidth >= 760) {
      this.isThisOpenServices.isFilterOpen = true;
    } else {
      this.isThisOpenServices.isFilterOpen = false;
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((value) => {
      let categories = value.get('shop');
      this.categoryName = categories;
    });

    const pagesCount = Math.ceil(this.total / this.limit);
    this.pageNumber = pagesCount;
    this.pages = this.range(1, pagesCount);
    this.getScreenSize();
  }

  isFilterClose(status: any): void {
    this.isThisOpenServices.isFilterOpen = status;
  }
  isFilterOpen() {
    if (this.isThisOpenServices.isFilterOpen === false) {
      this.isThisOpenServices.isFilterOpen = true;
    } else {
      this.isThisOpenServices.isFilterOpen = false;
    }
  }

  changePage(page: any): void {
    this.currentPage = page;
    this.goToTop();
  }

  prevPage(): void {
    this.currentPage = this.currentPage - 1;

    this.goToTop();
  }

  nextPage(): void {
    this.currentPage = this.currentPage + 1;
    this.goToTop();
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

  goToProductPage(id: any, name: any) {
    if (this.currentPage > 1) {
      this.router.navigate(['/product', this.limit + id, name]);
    } else {
      this.router.navigate(['/product', id, name]);
    }
  }

  goToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
