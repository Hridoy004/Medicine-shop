import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../services/backend.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


    addressForm = new FormGroup({
    Email: new FormControl(''),
    FirstName: new FormControl(''),
    Address: new FormControl(''),
    City: new FormControl(''),
    State: new FormControl(''),
    PhoneNumber: new FormControl(''),
  })

  constructor(private backendService: BackendService,
              private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  onAddressFormSubmit() {
    if(this.addressForm.valid) {
      let payload: any = this.addressForm.getRawValue();
      this.backendService.check(payload).subscribe((response: any) => {
        console.log(response);
      })
    }
  }

  openSnackBar() {
    this.snackBar.open('Thank you', '',{duration: 3000});
  }

}
