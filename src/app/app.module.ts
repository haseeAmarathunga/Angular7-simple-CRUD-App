import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule , MatCheckboxModule} from '@angular/material';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CustomerService } from './shared/customer.service';
import { environment } from '../environments/environment';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { MatDatepickerModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
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
    MatDatepickerModule

  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
