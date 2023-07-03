import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-hight-light',
  templateUrl: './hight-light.component.html',
  styleUrls: ['./hight-light.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HightLightComponent  {
 @Input() public text: string;
 @Input() public textColor: string;
 @Input() public index: number;

 public constructor(private _elementRef: ElementRef<HTMLElement>) {}
 //1
 // @HostListener('mouseenter')
 public onMouseEnter() {
   this._elementRef.nativeElement.style.color = this.textColor;
 }

 // @HostListener('mouseleave')
 public onMouseLeave() {
   this._elementRef.nativeElement.style.color = 'inherit';
 }

 
 
 //2: 
 public ngAfterViewInit(): void {
   this._elementRef.nativeElement.addEventListener(
     'mouseenter',
     this.onMouseEnter.bind(this)
   );

   this._elementRef.nativeElement.addEventListener(
     'mouseleave',
     this.onMouseLeave.bind(this)
   );

   
 }
 public ngOnDestroy(): void {
   this._elementRef.nativeElement.removeEventListener(
     'mouseenter',
     this.onMouseEnter.bind(this)
   ) 

   this._elementRef.nativeElement.removeEventListener(
     'mouseleave',
     this.onMouseLeave.bind(this)
   )
}
}
