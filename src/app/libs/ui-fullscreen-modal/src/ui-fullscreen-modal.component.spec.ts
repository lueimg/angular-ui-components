import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFullscreenModalComponent } from './ui-fullscreen-modal.component';

describe('UiFullscreenModalComponent', () => {
  let component: UiFullscreenModalComponent;
  let fixture: ComponentFixture<UiFullscreenModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFullscreenModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFullscreenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
