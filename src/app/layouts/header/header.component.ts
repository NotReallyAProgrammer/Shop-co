import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isNavOpen: boolean = false;
  offsetFlag: boolean = true;
  isSearchOpen: boolean = false;

  scrHeight: any;
  scrWidth: any;
  // Constructor
  constructor() {
    if ((this.scrWidth = window.screen.width >= 760)) {
      this.isNavOpen = true;
    } else {
      this.isNavOpen = false;
    }
  }

  openNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  showSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  // get the screen width and height
  @HostListener('window:resize', ['$event'])
  getScreenSize(event: Event) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;

    if (this.scrWidth >= 760) {
      this.isNavOpen = true;
    } else {
      this.isNavOpen = false;
    }
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if (window.scrollY > 0) {
      this.isNavOpen = !this.isNavOpen;
      this.isSearchOpen = !this.isSearchOpen;
    }
  }
}
