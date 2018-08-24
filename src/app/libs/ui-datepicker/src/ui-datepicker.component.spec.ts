import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDatePickerComponent } from './ui-datepicker.component';

describe('UiDatePickerComponent', () => {
  let component: UiDatePickerComponent;
  let fixture: ComponentFixture<UiDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
