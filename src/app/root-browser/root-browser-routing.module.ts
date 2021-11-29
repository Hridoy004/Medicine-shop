import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./components/error404/error404.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    loadChildren: () => import('../app-blog/app-blog.module').then(m => m.AppBlogModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule)
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
