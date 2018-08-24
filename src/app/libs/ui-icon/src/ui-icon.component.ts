import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './ui-icon.component.html',
  styleUrls: ['./ui-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiIconComponent {
    @Input() name: string = '';
    @Input() size: string = '';
    @Input() style: string = '';
    @Input() ngClass = {};

}
