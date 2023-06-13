import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signIn: FormGroup;
  public isSubmit: boolean = false;

  public constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signIn = this.createSignInForm();
  }

  public createSignInForm(): FormGroup {
    return this._formBuilder.group({
      email: this._formBuilder.control('', [Validators.required]),
      password: this._formBuilder.control('', [Validators.required]),
    });
  }

  public onSubmit(): void {
    console.log(this.signIn);
    this.isSubmit = true;
  }
}
