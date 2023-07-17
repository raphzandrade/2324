import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPagePushBasedComponent } from './list-page-push-based.component';

describe('ListPagePushBasedComponent', () => {
  let component: ListPagePushBasedComponent;
  let fixture: ComponentFixture<ListPagePushBasedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPagePushBasedComponent]
    });
    fixture = TestBed.createComponent(ListPagePushBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
