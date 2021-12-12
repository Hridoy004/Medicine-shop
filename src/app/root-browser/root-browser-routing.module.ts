import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./components/error404/error404.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {ProductsComponent} from "./components/products/products.component";


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
