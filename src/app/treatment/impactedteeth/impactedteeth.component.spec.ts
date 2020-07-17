import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactedteethComponent } from './impactedteeth.component';

describe('ImpactedteethComponent', () => {
  let component: ImpactedteethComponent;
  let fixture: ComponentFixture<ImpactedteethComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactedteethComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactedteethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
