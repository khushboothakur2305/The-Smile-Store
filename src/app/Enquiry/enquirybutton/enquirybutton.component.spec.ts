import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirybuttonComponent } from './enquirybutton.component';

describe('EnquirybuttonComponent', () => {
  let component: EnquirybuttonComponent;
  let fixture: ComponentFixture<EnquirybuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquirybuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
