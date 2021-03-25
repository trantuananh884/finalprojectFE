import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareGmailComponent } from './share-gmail.component';

describe('ShareGmailComponent', () => {
  let component: ShareGmailComponent;
  let fixture: ComponentFixture<ShareGmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareGmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareGmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
