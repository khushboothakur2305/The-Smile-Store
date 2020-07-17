import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthodonticsComponent } from './orthodontics.component';

describe('OrthodonticsComponent', () => {
  let component: OrthodonticsComponent;
  let fixture: ComponentFixture<OrthodonticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthodonticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthodonticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
