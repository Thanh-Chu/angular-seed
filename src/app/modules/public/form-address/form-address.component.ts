import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./form-address.component.scss'],
})
export class FormAddressComponent {
  @Input() public formAddress: FormGroup;
  @Input() public isSubmit: boolean;
}
