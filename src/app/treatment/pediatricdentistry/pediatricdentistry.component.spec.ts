import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricdentistryComponent } from './pediatricdentistry.component';

describe('PediatricdentistryComponent', () => {
  let component: PediatricdentistryComponent;
  let fixture: ComponentFixture<PediatricdentistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PediatricdentistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PediatricdentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
