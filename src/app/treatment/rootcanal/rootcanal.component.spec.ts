import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootcanalComponent } from './rootcanal.component';

describe('RootcanalComponent', () => {
  let component: RootcanalComponent;
  let fixture: ComponentFixture<RootcanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootcanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootcanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
