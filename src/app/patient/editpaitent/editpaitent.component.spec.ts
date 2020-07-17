import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaitentComponent } from './editpaitent.component';

describe('EditpaitentComponent', () => {
  let component: EditpaitentComponent;
  let fixture: ComponentFixture<EditpaitentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpaitentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpaitentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
