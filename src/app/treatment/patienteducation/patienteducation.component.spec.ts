import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienteducationComponent } from './patienteducation.component';

describe('PatienteducationComponent', () => {
  let component: PatienteducationComponent;
  let fixture: ComponentFixture<PatienteducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienteducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienteducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
