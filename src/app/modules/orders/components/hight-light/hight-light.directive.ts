import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appHightLight]',
})
export class HightLightDirective implements AfterViewInit,OnDestroy {

  @Input() public appHightLight: string;
  @Input() public text: string;

  // @HostListener('mouseenter') {
  //   this._elementRef.nativeElement.style.color = 'red';
  // }

  public constructor(private _elementRef: ElementRef<HTMLElement>) {}
  //1
  // @HostListener('mouseenter')
  public onMouseEnter() {
    this._elementRef.nativeElement.style.color = this.appHightLight;
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
      console.log(this.text);
      
    
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
