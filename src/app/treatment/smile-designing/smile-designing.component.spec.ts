import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileDesigningComponent } from './smile-designing.component';

describe('SmileDesigningComponent', () => {
  let component: SmileDesigningComponent;
  let fixture: ComponentFixture<SmileDesigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileDesigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
