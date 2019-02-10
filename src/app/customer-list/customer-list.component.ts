import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(public customerservice: CustomerService) { }
  customerArray = [];
  deleteSuccess: boolean;
  searchText = '';

  ngOnInit() {
    this.customerservice.getCustomer().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

  onDelete($key) {
    if (confirm('Are you sure?')) {
      this.customerservice.deleteCustomer($key);
      this.deleteSuccess = true;
      setTimeout(() => this.deleteSuccess = false , 3000);
    }
  }

  filterTable(customer) {
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }

}
