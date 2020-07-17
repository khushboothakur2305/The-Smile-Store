import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiententryComponent } from './patiententry.component';

describe('PatiententryComponent', () => {
  let component: PatiententryComponent;
  let fixture: ComponentFixture<PatiententryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatiententryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiententryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
