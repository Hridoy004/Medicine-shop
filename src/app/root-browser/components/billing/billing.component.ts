import { Component, OnInit } from '@angular/core';
import {billingService} from "../../services/billing.service";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private billing: billingService) { }

  readData: any;


  ngOnInit(): void {
    this.billing.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }
}
