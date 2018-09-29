import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const identitySameValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ? { 'identitySame': true } : null;
};
@Directive({
  selector: '[appIdentifySame]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IdentitySameValidatorDirective, multi: true }]
})
export class IdentitySameValidatorDirective  implements Validator{
  validate(control: AbstractControl): ValidationErrors {
    return identitySameValidator(control)
  }
  constructor() { }

}



