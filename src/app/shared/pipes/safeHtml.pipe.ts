import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    // tslint:disable-next-line:pipe-naming
    name: 'safeHtml'
 })
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) {}

  transform(style) {
    return this.sanitizer.bypassSecurityTrustScript(style);
  }
}
