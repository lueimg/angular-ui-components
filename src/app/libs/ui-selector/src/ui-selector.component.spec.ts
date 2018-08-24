import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectorComponent } from './ui-selector.component';
import { Component } from '@angular/core';


@Component({
  template: `
    <ui-selector [selected]="isSelected">
      ui selector test
    </ui-selector>
  `
})
class TestHostComponent {
  isSelected = false;
}


describe('UiSelectorComponent', () => {
  let fixture: ComponentFixture<any>;
  let component: any;
  let testHost: any;
  let selectorEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSelectorComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSelectorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('should have filled css class', () => {
      // Arrange
      component.selected = true;
      // Act
      fixture.detectChanges();
      const element: HTMLElement = fixture.nativeElement.querySelector('.selector');
      // Assert
      expect(element.classList.toString()).toBe('selector filled');
  });
  it('shouldnt have filled css class', () => {
    // Arrange
    component.selected = false;
    // Act
    fixture.detectChanges();
    // Assert
    const element: HTMLElement = fixture.nativeElement.querySelector('.selector');
    expect(element.classList.contains('filled')).toBe(false);
  });

  describe('UiSelectorComponent change class from Parent Component', () => {
    beforeEach(() => {
      fixture  = TestBed.createComponent(TestHostComponent);
      testHost = fixture.componentInstance;
      selectorEl = fixture.nativeElement.querySelector('.selector');
      fixture.detectChanges(); // trigger initial data binding
    });

    it('should test host handle ui-selector', () => {
      // Initial value is false
      expect(selectorEl.classList.contains('filled')).toBe(false);

      testHost.isSelected = true;
      fixture.detectChanges();
      expect(selectorEl.classList.contains('filled')).toBe(true);

      testHost.isSelected = false;
      fixture.detectChanges();
      expect(selectorEl.classList.contains('filled')).toBe(false);
    });
  });

});
