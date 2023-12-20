import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerComponent } from './layouts/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { CarousellComponent } from './layouts/carousell/carousell.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { register } from 'swiper/element/bundle';
import { CommentsCardComponent } from './layouts/comments-card/comments-card.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductCardComponent } from './layouts/product-card/product-card.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
