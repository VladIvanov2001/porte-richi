import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHallDoorComponent } from './order-hall-door.component';

describe('OrderHallDoorComponent', () => {
  let component: OrderHallDoorComponent;
  let fixture: ComponentFixture<OrderHallDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHallDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHallDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
