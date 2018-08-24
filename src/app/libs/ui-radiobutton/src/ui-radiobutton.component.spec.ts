import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRadiobuttonComponent } from './ui-radiobutton.component';

describe('UiRadiobuttonComponent', () => {
  let component: UiRadiobuttonComponent;
  let fixture: ComponentFixture<UiRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
