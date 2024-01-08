import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerComponent } from './layouts/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { CarousellComponent } from './layouts/carousell/carousell.component';

import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { register } from 'swiper/element/bundle';
import { CommentsCardComponent } from './layouts/comments-card/comments-card.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductCardComponent } from './layouts/product-card/product-card.component';
import { FilterTabComponent } from './layouts/filter-tab/filter-tab.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RatingComponent } from './layouts/rating/rating.component';
import { CartComponent } from './pages/cart/cart.component';

// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    CarousellComponent,
    CommentsCardComponent,
    SummaryPipe,
    CategoriesComponent,
    ProductCardComponent,
    FilterTabComponent,
    ProductPageComponent,
    RatingComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
