import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSample3]'
})
export class Sample3Directive {
  @Input() appSample3:any

  @HostListener('mouseenter') gdyNajezdzam(){
    this.elemRef.nativeElement.style.backgroundColor = this.appSample3
  }

  @HostListener('mouseleave') gdyWychodze(){
    this.elemRef.nativeElement.style.backgroundColor = ''
  }
  constructor(
    private readonly elemRef:ElementRef
  ) { }

  ngOnChanges(){
    console.log(this.appSample3)
  }
  
  
  
}
