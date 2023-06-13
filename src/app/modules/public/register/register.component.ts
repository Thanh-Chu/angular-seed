import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const mustMatch = (
  controlName: string,
  matchingControlName: string
): ValidatorFn => {
  return (abstractControl: AbstractControl): ValidationErrors | null => {
    const formGroup = abstractControl as FormGroup;
    const valueofControlA = formGroup.get(controlName)?.value;
    const valueofControlB = formGroup.get(matchingControlName)?.value;
    // const control = formGroup.controls[controlName];
    // const matchingControl = formGroup.controls[matchingControlName];
    if (valueofControlA === valueofControlB) {
      return null;
    } else {
      return { valuesDoNotMatch: true };
    }
  };
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public register: FormGroup;
  public isSubmit: boolean = false;
  public repeatPassword: string = 'none';
  public abc: boolean = false;

  public constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.register = this.createRegisterForm();
  }

  public createRegisterForm(): FormGroup {
    return this._formBuilder.group(
      {
        email: this._formBuilder.control('', [
          Validators.required,
          Validators.email,
        ]),
        phoneNumber: this._formBuilder.control('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ]),
        password: this._formBuilder.control('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ]),
        confirmPassword: this._formBuilder.control('', [Validators.required]),
      },
      { Validators: mustMatch('password', 'confirmPassword') }
    );
  }

  public onSubmit(): void {
    if (
      this.register.get('password').value ==
      this.register.get('confirmPassword').value
    ) {
      console.log('Submitted');
      this.abc = false;
    } else {
      this.repeatPassword = 'inline';
      console.log('errors');
      this.abc = true;
    }
    console.log(this.register.value);
    this.isSubmit = true;
  }
}
