import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcelainLaminateVeneersComponent } from './porcelain-laminate-veneers.component';

describe('PorcelainLaminateVeneersComponent', () => {
  let component: PorcelainLaminateVeneersComponent;
  let fixture: ComponentFixture<PorcelainLaminateVeneersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcelainLaminateVeneersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcelainLaminateVeneersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
