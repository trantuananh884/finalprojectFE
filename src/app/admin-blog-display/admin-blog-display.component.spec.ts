import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogDisplayComponent } from './admin-blog-display.component';

describe('AdminBlogDisplayComponent', () => {
  let component: AdminBlogDisplayComponent;
  let fixture: ComponentFixture<AdminBlogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
