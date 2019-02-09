import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../shared/customer.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  constructor(public customerService: CustomerService) {
    formControls = this.customerService.form.controls;
    console.log(this.formControls.fullName.errors);
  }

  submitted: boolean;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerService.form.valid) {
      // if (this.customerService.form.get('$key')==null)
      // insert

      this.submitted = false;
    }
  }
}
