import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend.service";
import {adminService} from "../../../root-browser/services/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
              private adminService: adminService,
              private snackBar: MatSnackBar) {

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

  openSnackBar() {
    this.snackBar.open('Thank you', '',{duration: 3000});
  }

}
