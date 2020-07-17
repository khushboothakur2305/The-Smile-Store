import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothWhiteningComponent } from './tooth-whitening.component';

describe('ToothWhiteningComponent', () => {
  let component: ToothWhiteningComponent;
  let fixture: ComponentFixture<ToothWhiteningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToothWhiteningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothWhiteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
