import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function NumberOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const numberOnlyRegex = /^[0-9]\d*$/;

        const controlValue = control.value;

        const isNumberOnly = numberOnlyRegex.test(controlValue)

        console.log('isNumberOnly', isNumberOnly);

        return isNumberOnly ? null : { 'isnumberonly': true };
    }
}