import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavAdminComponent } from './main-nav-admin.component';

describe('MainNavAdminComponent', () => {
  let component: MainNavAdminComponent;
  let fixture: ComponentFixture<MainNavAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
