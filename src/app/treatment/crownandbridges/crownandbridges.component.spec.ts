import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownandbridgesComponent } from './crownandbridges.component';

describe('CrownandbridgesComponent', () => {
  let component: CrownandbridgesComponent;
  let fixture: ComponentFixture<CrownandbridgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrownandbridgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownandbridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
