import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormLivingDoorComponent} from './form-living-door/form-living-door.component';
import {FormHallDoorComponent} from './form-hall-door/form-hall-door.component';
import {OrderHallDoorComponent} from './order-hall-door/order-hall-door.component';
import {PriceListComponent} from './price-list/price-list.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {OrderLivingDoorComponent} from './order-living-door/order-living-door.component';
import {LoginGuardGuard} from './login-guard.guard';

const routes: Routes = [
  {path: 'formlivingdoor/:id', component: FormLivingDoorComponent, canActivate: [LoginGuardGuard]},
  {path: 'formhalldoor/:id', component: FormHallDoorComponent, canActivate: [LoginGuardGuard]},
  {path: 'orderhalldoor/:id', component: OrderHallDoorComponent, canActivate: [LoginGuardGuard]},
  {path: 'price', component: PriceListComponent, canActivate: [LoginGuardGuard]},
  {path: '', component: SignupFormComponent },
  {path: 'orderlivingdoor/:id', component: OrderLivingDoorComponent, canActivate: [LoginGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
