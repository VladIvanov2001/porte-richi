import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLivingDoorComponent } from './order-living-door.component';

describe('OrderLivingDoorComponent', () => {
  let component: OrderLivingDoorComponent;
  let fixture: ComponentFixture<OrderLivingDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLivingDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLivingDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
