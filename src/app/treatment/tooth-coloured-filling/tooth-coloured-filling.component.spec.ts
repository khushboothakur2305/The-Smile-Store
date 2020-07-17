import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothColouredFillingComponent } from './tooth-coloured-filling.component';

describe('ToothColouredFillingComponent', () => {
  let component: ToothColouredFillingComponent;
  let fixture: ComponentFixture<ToothColouredFillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToothColouredFillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothColouredFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
