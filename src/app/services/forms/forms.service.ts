import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  public getControlError(formGroup: FormGroup, controlName: string, errorName: string): boolean {
    const control = formGroup.get(controlName);

    const controlIsPristine = control.pristine;

    if (controlIsPristine) return false;

    const hasError: boolean = !!control.getError(errorName)

    return hasError;
  }

}
