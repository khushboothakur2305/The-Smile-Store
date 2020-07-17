import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalImplantsComponent } from './dental-implants.component';

describe('DentalImplantsComponent', () => {
  let component: DentalImplantsComponent;
  let fixture: ComponentFixture<DentalImplantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalImplantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalImplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
