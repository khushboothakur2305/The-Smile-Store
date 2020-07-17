import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodonticsComponent } from './periodontics.component';

describe('PeriodonticsComponent', () => {
  let component: PeriodonticsComponent;
  let fixture: ComponentFixture<PeriodonticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodonticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodonticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
