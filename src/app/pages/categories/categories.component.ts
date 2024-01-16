import {
  Component,
  Input,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';
import { clothesInventory } from 'src/app/dummy-data/clothes-data';
import { ActivatedRoute, Router } from '@angular/router';

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

  categoryName: any;

  id!: string;

  //Pagination
  @Input() currentPage: number = 1;

  limit: number = 9;

  // @Output() changePage = new EventEmitter<number>();
  pages: number[] = [];
  value!: string;

  route = inject(ActivatedRoute);

  @HostListener('window:resize', ['$event'])
  @HostListener('window:scroll')
  getScreenSize() {
    this.scrWidth = window.innerWidth;

    if (this.scrWidth >= 760) {
      this.filterOpen = true;
    } else {
      this.filterOpen = false;
    }
  }

  constructor(private router: Router) {}

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
