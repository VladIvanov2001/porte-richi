import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {SignupFormComponent} from '../signup-form/signup-form.component';
import {User} from '../user';
import {HttpService} from '../http.service';
import {Order} from '../order';


@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
  providers: [SignupFormComponent, HttpService]
})


export class PriceListComponent implements OnInit {
  address: string;
  doors: Array<Order>;
  iconSearch = 'assets/search.svg';
  smallArrow = 'assets/small-arrow.svg';
  private shopId = localStorage.getItem('id');

  constructor(private router: Router, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getInfoAboutShop(this.shopId, ).subscribe((data: Order) => {
      this.address = data.address;
      this.doors = data.hallDoors;
    });
  }

  exitFromApp(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  onLivingDoor(): void {
    this.httpService.getInfoAboutShop(this.shopId, 'living').subscribe((data: Order) => {
      this.doors = data.hallDoors;
    });
  }

  onHallDoor(): void {
    this.httpService.getInfoAboutShop(this.shopId, 'hall').subscribe((data: Order) => {
      this.doors = data.hallDoors;
    });
  }

  addOrder(data): void {
    console.log(data.id);
    if (data.type === 'hall') {
      this.router.navigate(['/formhalldoor', data.id]);
    } else {
      this.router.navigate(['/orderlivingdoor', data.id]);
    }
  }
}
