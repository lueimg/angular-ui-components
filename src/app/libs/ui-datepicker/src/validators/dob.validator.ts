import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
const moment = moment_;
import { IValidationResult } from './validation-result';
// legacy validator
export class DOBValidator {
    static validate(c: FormControl): IValidationResult {
        if (c.value === undefined || c.value.trim() === '') {
            return undefined;
        }

        const momentDate: any = moment(c.value, 'MM/DD/YYYY', true);
        const isValid: boolean = momentDate.isValid() && momentDate.isBefore(moment().startOf('day'));
        return isValid ? undefined : { validDOB: false };
    }
}

// Correct validator , used by ui-input
// tslint:disable-next-line:max-classes-per-file
export class CustomValidation {
    static validate(c: FormControl): IValidationResult {
        if (!c.value) {
            return null;
        }
        const momentDate: any = moment(c.value, 'MM/DD/YYYY', true);
        const isValid: boolean = momentDate.isValid() && momentDate.isBefore(moment().startOf('day'));
        return isValid ? null : { customValidation: true };
    }
}
