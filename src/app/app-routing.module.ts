import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:shop', component: CategoriesComponent },
  { path: 'product/:id/:name', component: ProductPageComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
