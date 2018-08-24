import { Pipe, PipeTransform } from '@angular/core';
/**
 * Translate pipe mock
 * @todo: remove once ngx-translate is implemented
 */
@Pipe({
    // tslint:disable-next-line:pipe-naming
    name: 'translate'
})
export class TranslatePipeMock implements PipeTransform {
  transform(val, args) {
    return val;
  }
}
