import { Component, OnInit } from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../http.service";
import {Trim} from "../trim";
import {Order} from "../order";

@Component({
  selector: 'app-order-hall-door',
  templateUrl: './order-hall-door.component.html',
  styleUrls: ['./order-hall-door.component.scss'],
  providers: [HttpService]
})
export class OrderHallDoorComponent implements OnInit {
  arrow = 'assets/arrow.svg';
  orderId: number;
  order: Order;
  construction;
  private priceWithoutDiscount;
  private priceWithDiscount;
  private price;
  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService) { }

   ngOnInit(): void {
    this.priceWithoutDiscount = document.querySelector('.price__inscription__without-discount');
    this.priceWithDiscount = document.querySelector('.price__inscription__with-discount');
    this.price = document.querySelector('.price__inscription');
    this.route.params.subscribe((params) => {
      this.orderId = params.id;
      this.httpService.getOrderById(this.orderId).subscribe((data: Order) => {
        this.order = data;
        if (!this.order.priceWithDiscount){
          this.price.classList.add('div-for-price-without-discount');
          this.priceWithoutDiscount.classList.add('price-without-discount');
          this.priceWithDiscount.classList.add('discount-price');
        }
      });
    });
  }

  exitFromApp(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
