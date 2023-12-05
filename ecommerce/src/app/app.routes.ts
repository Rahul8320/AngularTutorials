import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { CategoryComponent } from './core/pages/category/category.component';
import { CartComponent } from './core/pages/cart/cart.component';
import { WishlistComponent } from './core/pages/wishlist/wishlist.component';
import { DetailsComponent } from './core/pages/details/details.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { LoginComponent } from './core/pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
