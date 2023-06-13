import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./form-skill.component.scss'],
})
export class FormSkillComponent {
  @Input() formSkill: FormGroup;
  @Input() isSubmit: boolean;
}
