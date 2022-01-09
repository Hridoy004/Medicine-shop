import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend.service";
import {adminService} from "../../../root-browser/services/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  showMe:boolean=false;
  toggleTag() {
    this.showMe=!this.showMe
  }

  userForm = new FormGroup({
    Email: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Number: new FormControl(''),
  })

  constructor(private backendService: BackendService,
              private adminService: adminService) {

  }

  readData: any;


  ngOnInit(): void {
    this.adminService.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }


  onUserFormSubmit() {
    if(this.userForm.valid) {
      let payload: any = this.userForm.getRawValue();
      console.log(payload);
      this.backendService.admin(payload).subscribe((response: any) => {
        console.log(response);
      })
    }
  }


}
