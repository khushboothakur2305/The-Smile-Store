import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobGalleryComponent } from './mob-gallery.component';

describe('MobGalleryComponent', () => {
  let component: MobGalleryComponent;
  let fixture: ComponentFixture<MobGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
