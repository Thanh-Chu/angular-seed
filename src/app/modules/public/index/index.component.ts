import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TempConverterPipe } from '../../pipes/temp-converter.pipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  @Input() public fValue: number;
  @Input() public cValue: number;
  ngOnInit(): void {}
}
