import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  constructor(public customerService: CustomerService) {
    console.log();
  }

  submitted: boolean;
  submitSuccess: boolean;
  formControls = this.customerService.form.controls;
  ngOnInit() {
  }

  public onSubmit() {
    this.submitted = true;
    if (this.customerService.form.valid) {
      if (this.customerService.form.get('$key').value == null) {
        // insert
        this.customerService.insertCustomer(this.customerService.form.value);
      } else {
        this.customerService.updateCustomer(this.customerService.form.value);
      }
      this.submitSuccess = true;
      setTimeout(() => this.submitSuccess = false, 3000);
      this.submitted = false;
      this.customerService.form.reset();
    }
  }
}

