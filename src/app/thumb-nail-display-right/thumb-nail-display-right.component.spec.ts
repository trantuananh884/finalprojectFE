import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbNailDisplayRightComponent } from './thumb-nail-display-right.component';

describe('ThumbNailDisplayRightComponent', () => {
  let component: ThumbNailDisplayRightComponent;
  let fixture: ComponentFixture<ThumbNailDisplayRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbNailDisplayRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbNailDisplayRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
