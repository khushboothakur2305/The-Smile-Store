import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMouthRehabilitationComponent } from './full-mouth-rehabilitation.component';

describe('FullMouthRehabilitationComponent', () => {
  let component: FullMouthRehabilitationComponent;
  let fixture: ComponentFixture<FullMouthRehabilitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullMouthRehabilitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMouthRehabilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
