import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLivingDoorComponent } from './form-living-door.component';

describe('FormLivingDoorComponent', () => {
  let component: FormLivingDoorComponent;
  let fixture: ComponentFixture<FormLivingDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLivingDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLivingDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
