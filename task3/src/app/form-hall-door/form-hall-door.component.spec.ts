import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHallDoorComponent } from './form-hall-door.component';

describe('FormHallDoorComponent', () => {
  let component: FormHallDoorComponent;
  let fixture: ComponentFixture<FormHallDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHallDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHallDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
