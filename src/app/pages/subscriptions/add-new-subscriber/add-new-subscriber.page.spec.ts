import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSubscriberPage } from './add-new-subscriber.page';

describe('AddNewSubscriberPage', () => {
  let component: AddNewSubscriberPage;
  let fixture: ComponentFixture<AddNewSubscriberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewSubscriberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSubscriberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
