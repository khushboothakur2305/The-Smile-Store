import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentaljewelleryComponent } from './dentaljewellery.component';

describe('DentaljewelleryComponent', () => {
  let component: DentaljewelleryComponent;
  let fixture: ComponentFixture<DentaljewelleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentaljewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentaljewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
