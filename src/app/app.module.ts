import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule , MatCheckboxModule} from '@angular/material';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CustomerService } from './shared/customer.service';
import { environment } from '../environments/environment';
import { HeaderComponent } from './inc/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,

  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
