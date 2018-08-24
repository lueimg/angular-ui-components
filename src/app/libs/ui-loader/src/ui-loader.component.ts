import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-loader',
  templateUrl: './ui-loader.component.html',
  styleUrls: ['./ui-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiLoaderComponent {
  @Input() size = 'medium';
  @Input() label = 'Loading ...';
}
