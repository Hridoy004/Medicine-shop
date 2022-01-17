import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactSectionComponent} from "./components/contact-section/contact-section.component";
import {ContactInfoComponent} from "./components/contact-info/contact-info.component";

const routes: Routes = [
  {
    path: '',
    component: ContactSectionComponent
  },
  {
    path: 'info',
    component: ContactInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
