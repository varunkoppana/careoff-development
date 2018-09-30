import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

export const identitySameValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('rgstrPassword');
  const confirmPassword = control.get('rgstrCnfrmPassword');

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



