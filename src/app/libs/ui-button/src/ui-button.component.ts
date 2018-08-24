import { Component, OnInit, Input } from '@angular/core';
export type ButtonType = '' | 'button' | 'submit';
export type Type = '' | 'standard' | 'alternate' | 'green' | 'ghost' | 'ghost white' | 'flat' | 'link' | 'cancel' | 'continue';
export type Size = '' | 'small' | 'medium' | 'button-large';
export type Style = '' | 'block' | 'filled' | 'disabled' | 'text-right' | 'disabled';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {

  _disabled = false;
  @Input() type: Type = 'standard'; //  Css class-type
  @Input() size: Size = '';
  @Input() style: Style = '';
  @Input() id = '';
  @Input() buttonType: ButtonType = 'button';
  @Input('disabled') set disabled (conditional: boolean) {
     this._disabled = conditional !== false;
  }
  get disabled () {
    return this._disabled;
  }
}
