import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./components/error404/error404.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {ProductsComponent} from "./components/products/products.component";
import {CartComponent} from "./components/cart/cart.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {BillingComponent} from "./components/billing/billing.component";
import {UserManagementComponent} from "./components/user-management/user-management.component";



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'category',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'comment',
    component: CommentComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'users',
    component: UserManagementComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('../app-admin/app-admin.module').then(m => m.AppAdminModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('../app-blog/app-blog.module').then(m => m.AppBlogModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../app-profile/app-profile.module').then(m => m.AppProfileModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootBrowserRoutingModule { }
