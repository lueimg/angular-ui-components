import { AbstractControl } from '@angular/forms';
import { IValidationResult } from './validation-result';
import * as moment_ from 'moment';
const moment = moment_;

export function maxDateValidator(max: Date) {
    return (control: AbstractControl): IValidationResult | null => {
        const momentDate: any = moment(control.value, 'MM/DD/YYYY', true);
        if (momentDate.isValid() && momentDate.isAfter(moment(max))) {
            return { maxDate: true };
        }
        return null;
    };
}
