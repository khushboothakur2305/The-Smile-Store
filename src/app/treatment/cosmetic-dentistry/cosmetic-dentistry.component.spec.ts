import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticDentistryComponent } from './cosmetic-dentistry.component';

describe('CosmeticDentistryComponent', () => {
  let component: CosmeticDentistryComponent;
  let fixture: ComponentFixture<CosmeticDentistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticDentistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticDentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
