import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() public login: FormGroup;

  public constructor(private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.login = this.createFormLogin({} as Login);
  }

  public createFormLogin(form: Login): FormGroup {
    return this._formBuilder.group({
      userName: this._formBuilder.control('', [Validators.required]),
      password: this._formBuilder.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]),
      remember: this._formBuilder.control(false),
    });
  }

  public onSubmit(): void {
    console.log(this.login.value);
  }
}
