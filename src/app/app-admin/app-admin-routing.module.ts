import { NgModule } from '@angular/core';
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./components/users/users.component";


const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent
  },
  {
    path: 'admins',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
