import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChuyenTrangComponent } from './test-chuyen-trang.component';

describe('TestChuyenTrangComponent', () => {
  let component: TestChuyenTrangComponent;
  let fixture: ComponentFixture<TestChuyenTrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestChuyenTrangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChuyenTrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
