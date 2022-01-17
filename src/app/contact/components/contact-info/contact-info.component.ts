import { Component, OnInit } from '@angular/core';
import {contactInfoService} from "../../../root-browser/services/contact-info.service";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor(private userService: contactInfoService) { }

  readData: any;


  ngOnInit(): void {
    this.userService.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }

}
