import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../http.service';
import {Order} from '../order';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-hall-door',
  templateUrl: './form-hall-door.component.html',
  styleUrls: ['./form-hall-door.component.scss'],
  providers: [HttpService]
})
export class FormHallDoorComponent implements OnInit {
  private order: Order;

  doorsData = this.formBuilder.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    equipment: ['', Validators.required],
    trims: this.formBuilder.group({
      inside: ['', Validators.required],
      outside: ['', Validators.required],
      boxColoring: ['', Validators.required],
    }),
    constructions: this.formBuilder.group({
      bladeThickness: ['', Validators.required],
      sheetMetalThickness: ['', Validators.required],
      boxMetalThickness: ['', Validators.required],
      sealingContours: ['', Validators.required],
      clothInsulation: ['', Validators.required],
      boxInsulation: ['', Validators.required],
      sealant: ['', Validators.required],
    }),
    furniture: this.formBuilder.group({
      upperLock: ['', Validators.required],
      downLock: ['', Validators.required],
      patch: ['', Validators.required],
      armorPatch: ['', Validators.required],
      handle: ['', Validators.required],
    }),
    price: ['', Validators.required],
    priceWithDiscount: ['']
  });

  smallArrow = 'assets/small-arrow.svg';
  rightArrow = 'assets/right-arrow.svg';
  door = 'assets/door.svg';
  leftArrow = 'assets/left-arrow.svg';
  addingSign = 'assets/adding-sign.svg';
  orderId: number;
  isChecked: boolean;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private httpService: HttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = params.id;
      this.httpService.getOrderById(this.orderId).subscribe((data: Order) => {
        this.order = data;
        console.log(this.order);
        this.doorsData.patchValue(
          {
            name: this.order.name,
            type: this.order.type,
            equipment: this.order.equipment,
            price: this.order.price,
            priceWithDiscount: this.order.priceWithDiscount
          }
        );
        this.isChecked = !!this.doorsData.value.priceWithDiscount;
        this.doorsData.get('trims').patchValue({
          outside: this.order.trims[0].outside,
          inside: this.order.trims[0].inside,
          boxColoring: this.order.trims[0].boxColoring
        });
        this.doorsData.get('constructions').patchValue({
          bladeThickness: this.order.constructions[0].bladeThickness,
          sheetMetalThickness: this.order.constructions[0].sheetMetalThickness,
          boxMetalThickness: this.order.constructions[0].boxMetalThickness,
          sealingContours: this.order.constructions[0].sealingContours,
          clothInsulation: this.order.constructions[0].clothInsulation,
          boxInsulation: this.order.constructions[0].boxInsulation,
          sealant: this.order.constructions[0].sealant
        });
        this.doorsData.get('furniture').patchValue({
          upperLock: this.order.furniture[0].upperLock,
          downLock: this.order.furniture[0].downLock,
          patch: this.order.furniture[0].patch,
          armorPatch: this.order.furniture[0].armorPatch,
          handle: this.order.furniture[0].handle,
        });
      });
    });
  }

  changeAppointment(e): void {
    console.log(e.target.value);
  }

  onSubmit(): void {
    this.httpService.postInfoFromForm(this.doorsData.value).subscribe((data: Order) => {
      this.router.navigate(['/orderhalldoor', data.id]);
    });
  }

 exitFromApp(): void {
    localStorage.removeItem('token');
    this.router.navigate( ['/'] );
 }
}
