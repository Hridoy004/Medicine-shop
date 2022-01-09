import { Component, OnInit } from '@angular/core';
import {userService} from "../../services/user.service";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private userService: userService) { }

  readData: any;


  ngOnInit(): void {
    this.userService.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }
}
