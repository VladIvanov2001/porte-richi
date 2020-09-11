import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-order-living-door',
  templateUrl: './order-living-door.component.html',
  styleUrls: ['./order-living-door.component.scss'],
  providers: [HttpService]
})
export class OrderLivingDoorComponent implements OnInit {
  arrow = 'assets/arrow.svg';
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
