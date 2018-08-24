import { FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import * as moment_ from 'moment';
const moment = moment_;

export function ViewFormatValidator (format: string): ValidatorFn {
    return (c: AbstractControl) : { [key: string]: boolean} | null => {
        if (!c.value) {
            return null;
        }
        const isValid = moment(c.value , format, true).isValid();
        if (!isValid) {
            return { viewFormatValidator: true };
        }
        return null;
    };

}
