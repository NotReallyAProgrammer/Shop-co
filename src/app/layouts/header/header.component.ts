import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isNavOpen: boolean = false;
  offsetFlag: boolean = true;

  openNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if (window.scrollY > 0) this.isNavOpen = !this.isNavOpen;
  }
}
