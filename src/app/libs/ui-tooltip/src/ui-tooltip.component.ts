import { AfterViewInit, Component, ElementRef, HostListener, Input, Renderer2, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-tooltip',
  styleUrls: ['./ui-tooltip.component.scss'],
  templateUrl: './ui-tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTooltipComponent implements AfterViewInit {

  ownerPositionX: number;
  ownerPositionY: number;
  tooltipOwner: ElementRef;
  _onTopOfContent: boolean = false;
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() position: string = 'top';
  @Input() class: string = '';
  @Input() iconName: string = 'icon-alerts_info-circle-o';
  @Input() iconClass: string = '';
  // Hide the icon and show the tooltip over the content
  @Input('onTopOfContent') set onTopOfContent(condition: boolean) {
    this._onTopOfContent = condition !== false;
  }
  get onTopOfContent() {
    return this._onTopOfContent;
  }

  @ViewChild('contentWrapper') contentWrapper: ElementRef;
  @ViewChild('tooltipIcon') icon: ElementRef;
  @ViewChild('tooltip') tooltip: ElementRef;
  @ViewChild('tooltipCaret') caret: ElementRef;

  constructor(public renderer: Renderer2) {}

  ngAfterViewInit() {
    this.tooltipOwner = this.icon || this.contentWrapper;
  }

  mouseEnter () {
    this.updateTooltip();
  }

  updateTooltip() {
    this.updateIconPosition();
    this.setTooltipPosition();
    this.setCaretPosition();

    if (this.onTopOfContent) {
      this.centerTooltip();
      this.centerCaret();
    }
  }

  updateIconPosition() {
    this.ownerPositionY = this.tooltipOwner.nativeElement.getBoundingClientRect().top
                          + (this.tooltipOwner.nativeElement.offsetHeight / 2);

    this.ownerPositionX = this.tooltipOwner.nativeElement.offsetLeft
                          + (this.tooltipOwner.nativeElement.offsetWidth / 2)
                          - (this.caret.nativeElement.offsetWidth / 2);
  }

  setTooltipPosition() {
    const tooltipMarginBottom = 15;
    const threshold = this.ownerPositionY
                      - this.tooltip.nativeElement.offsetHeight
                      - tooltipMarginBottom;

    if (threshold < 0) {
      this.renderer.addClass(this.tooltip.nativeElement, 'tooltip-bottom');
    } else {
      this.renderer.removeClass(this.tooltip.nativeElement, 'tooltip-bottom');
    }

    if (this.tooltipOwner.nativeElement.offsetLeft > this.tooltip.nativeElement.offsetWidth) {
      const left = this.tooltipOwner.nativeElement.offsetLeft
                  - this.tooltip.nativeElement.offsetWidth
                  + (this.tooltipOwner.nativeElement.offsetWidth);

      this.renderer.setStyle(this.tooltip.nativeElement, 'left', `${left}px`);
    }
  }

  setCaretPosition() {
    this.renderer.setStyle(this.caret.nativeElement, 'left', `${this.ownerPositionX}px`);

    if (this.tooltipOwner.nativeElement.offsetLeft > this.tooltip.nativeElement.offsetWidth) {
      const left = this.tooltip.nativeElement.offsetWidth
                  - this.tooltipOwner.nativeElement.offsetWidth
                  + (this.caret.nativeElement.offsetWidth / 2);

      this.renderer.setStyle(this.caret.nativeElement, 'left', `${left}px`);
    }
  }

  centerTooltip () {
    const left = Math.abs(this.tooltip.nativeElement.offsetWidth - this.tooltipOwner.nativeElement.offsetWidth) / 2;
    if (this.tooltip.nativeElement.offsetWidth > this.tooltipOwner.nativeElement.offsetWidth) {
      this.renderer.setStyle(this.tooltip.nativeElement, 'left', `-${left}px`);
    } else {
      this.renderer.setStyle(this.tooltip.nativeElement, 'left', `${left}px`);
    }
  }

  centerCaret () {
    const exceededSpace = Math.abs(this.tooltip.nativeElement.offsetWidth - this.tooltipOwner.nativeElement.offsetWidth) / 2;

    const left = this.tooltip.nativeElement.offsetWidth > this.tooltipOwner.nativeElement.offsetWidth ?
          this.ownerPositionX + exceededSpace :
          this.tooltip.nativeElement.offsetWidth / 2;

    this.renderer.setStyle(this.caret.nativeElement, 'left', `${left}px`);
  }
}
