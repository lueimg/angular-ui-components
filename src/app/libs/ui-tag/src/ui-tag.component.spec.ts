import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTagComponent } from './ui-tag.component';

describe('UiTagComponent', () => {
  let component: UiTagComponent;
  let fixture: ComponentFixture<UiTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
