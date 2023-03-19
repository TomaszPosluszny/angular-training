import { Directive,Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSample1]'
})
export class Sample1Directive {

  

    constructor( private readonly renderer: Renderer2, private readonly elmRef: ElementRef) {
    renderer.setStyle(elmRef.nativeElement, 'border-radius', '100px');}

}
