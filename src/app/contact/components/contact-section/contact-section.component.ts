import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend.service";

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

    contactForm = new FormGroup({
    Email: new FormControl('', [Validators.email, Validators.required]),
    Name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Message: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
  })
  constructor( private backendService: BackendService) { }

  ngOnInit(): void {
  }

  onContactFormSubmit() {
    if(this.contactForm.valid) {
      let payload: any = this.contactForm.getRawValue();
      console.log(payload);
      this.backendService.contact(payload).subscribe((response: any) => {
        console.log(response);
      })
    }
  }
}
