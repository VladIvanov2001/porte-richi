import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PriceListComponent } from './price-list/price-list.component';
import { OrderHallDoorComponent } from './order-hall-door/order-hall-door.component';
import { OrderLivingDoorComponent } from './order-living-door/order-living-door.component';
import { FormHallDoorComponent } from './form-hall-door/form-hall-door.component';
import { FormLivingDoorComponent } from './form-living-door/form-living-door.component';
import {HttpService} from './http.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    PriceListComponent,
    OrderHallDoorComponent,
    OrderLivingDoorComponent,
    FormHallDoorComponent,
    FormLivingDoorComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
