import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {path: 'customer' , component: CustomerComponent},
  {path: 'customerlist' , component: CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CustomerComponent , CustomerListComponent ];
