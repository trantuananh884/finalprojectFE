import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailDisplayComponent } from './thumbnail-display.component';

describe('ThumbnailDisplayComponent', () => {
  let component: ThumbnailDisplayComponent;
  let fixture: ComponentFixture<ThumbnailDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
