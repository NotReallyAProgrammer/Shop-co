import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart.service.service';
import { IsThisOpenService } from 'src/app/services/is-this-open.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isNavOpen: boolean = false;
  offsetFlag: boolean = true;
  isSearchOpen: boolean = false;
  public text!: String;
  scrHeight: any;
  scrWidth: any;
  cartService = inject(CartServiceService);
  isThisOpenService = inject(IsThisOpenService);
  elRef = inject(ElementRef);

  // Constructor
  constructor() {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const clickedInside = this.elRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isNavOpen = false;
    }
  }
  ngOnInit() {
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
    if (this.scrWidth <= 920) {
      if (this.isSearchOpen == false) {
        this.isNavOpen = true;
      } else {
        this.isNavOpen = false;
      }
    }
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
      if (this.scrWidth < 760) {
        if (this.isNavOpen == true) this.isNavOpen = false;
      }
    }
  }
}
