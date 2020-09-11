import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-living-door',
  templateUrl: './form-living-door.component.html',
  styleUrls: ['./form-living-door.component.scss']
})
export class FormLivingDoorComponent implements OnInit {
  smallArrow = 'assets/small-arrow.svg';
  rightArrow = 'assets/right-arrow.svg';
  door = 'assets/door.svg';
  leftArrow = 'assets/left-arrow.svg';
  addingSign = 'assets/adding-sign.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
