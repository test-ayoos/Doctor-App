import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreePage } from './degree.page';

describe('DegreePage', () => {
  let component: DegreePage;
  let fixture: ComponentFixture<DegreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
