import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormSelectComponent } from './ui-form-select.component';

describe('UiFormSelectComponent', () => {
  let component: UiFormSelectComponent;
  let fixture: ComponentFixture<UiFormSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFormSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
