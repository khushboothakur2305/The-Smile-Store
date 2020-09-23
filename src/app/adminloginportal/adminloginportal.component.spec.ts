import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginportalComponent } from './adminloginportal.component';

describe('AdminloginportalComponent', () => {
  let component: AdminloginportalComponent;
  let fixture: ComponentFixture<AdminloginportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminloginportalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
