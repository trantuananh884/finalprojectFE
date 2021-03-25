import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclaimComponent } from './reclaim.component';

describe('ReclaimComponent', () => {
  let component: ReclaimComponent;
  let fixture: ComponentFixture<ReclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
