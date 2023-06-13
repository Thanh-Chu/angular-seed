import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill, Staff } from 'src/app/models/staff.model';

@Component({
  selector: 'app-form-staff',
  templateUrl: './form-staff.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./form-staff.component.scss'],
})
export class FormStaffComponent implements OnInit {
  @Input() public formStaff: FormGroup;
  @Input() public isSubmit: boolean;
  public familyNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  public constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public createEmployeeForm(employee: Staff): FormGroup {
    console.log(this.isSubmit);

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

  public updateVehicles(event: Event): void {
    const { checked: isChecked, value } = event.target as HTMLInputElement;
    const currentValue = this.formStaff
      .get('vehicles')
      .getRawValue() as string[];
    if (isChecked) {
      this.formStaff.get('vehicles').patchValue([...currentValue, value]);
    } else {
      this.formStaff
        .get('vehicles')
        .patchValue(currentValue.filter((item) => item != value));
    }
  }

  public updateHobbies(event: Event): void {
    const { checked: isChecked, value } = event.target as HTMLInputElement;
    const currentValue = this.formStaff
      .get('hobbies')
      .getRawValue() as string[];
    if (isChecked) {
      this.formStaff.get('hobbies').patchValue([...currentValue, value]);
    } else {
      this.formStaff
        .get('hobbies')
        .patchValue(currentValue.filter((item) => item !== value));
    }
  }

  public createSkill(skill: Skill): FormGroup {
    return this._formBuilder.group({
      name: this._formBuilder.control('', [Validators.required]),
      exp: this._formBuilder.control('', [Validators.required]),
    });
  }

  public addSkill(): void {
    const skillFA = this.formStaff.get('skills') as FormArray;
    skillFA.push(
      this.createSkill({
        name: '',
        exp: 0,
      })
    );
  }

  public removeSkill(skillIndex: number): void {
    const skillFA = this.formStaff.get('skills') as FormArray;
    skillFA.removeAt(skillIndex);
  }

  public addChild(): void {
    const empFA = this.formStaff.get('subEmployees') as FormArray;
    empFA.push(this.createEmployeeForm({} as Staff));
  }
  public removeChild(empIndex: number): void {
    const empFA = this.formStaff.get('subEmployees') as FormArray;
    empFA.removeAt(empIndex);
  }
}
