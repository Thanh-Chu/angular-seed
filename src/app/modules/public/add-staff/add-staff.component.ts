import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Staff } from 'src/app/models/staff.model';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-staff.component.scss'],
})
export class AddStaffComponent implements OnInit {
  public addStaff: FormGroup;
  @Input() public isSubmit: boolean = false;

  public constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addStaff = this.createFormStaff({} as Staff);
  }

  public createFormStaff(staff: Staff): FormGroup {
    return this._formBuilder.group({
      firstName: this._formBuilder.control('', [Validators.required]),
      lastName: this._formBuilder.control('', [Validators.required]),
      gender: this._formBuilder.control('', [Validators.required]),
      familyMember: this._formBuilder.control('', [Validators.required]),
      vehicles: this._formBuilder.control(['Bike'], [Validators.required]),
      hobbies: this._formBuilder.control(['Book'], [Validators.required]),
      address: this._formBuilder.group({
        street: this._formBuilder.control('', [Validators.required]),
        ward: this._formBuilder.control('', [Validators.required]),
        district: this._formBuilder.control('', [Validators.required]),
        province: this._formBuilder.control('', [Validators.required]),
      }),
      skills: this._formBuilder.array([]),
      subEmployees: this._formBuilder.array([]),
    });
  }

  public onSubmit(): void {
    console.log(this.addStaff.value);
    this.isSubmit = true;
  }
}
