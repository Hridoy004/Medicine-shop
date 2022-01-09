import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    SidebarComponent,
    UsersComponent,
    AdminComponent
  ],
    imports: [
        CommonModule,
        AppAdminRoutingModule,
        MatSidenavModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class AppAdminModule { }
