import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureProductionPage } from './capture-production.page';

describe('CaptureProductionPage', () => {
  let component: CaptureProductionPage;
  let fixture: ComponentFixture<CaptureProductionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureProductionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureProductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
