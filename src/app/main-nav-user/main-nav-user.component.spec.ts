import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavUserComponent } from './main-nav-user.component';

describe('MainNavUserComponent', () => {
  let component: MainNavUserComponent;
  let fixture: ComponentFixture<MainNavUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
