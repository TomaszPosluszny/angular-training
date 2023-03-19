import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample2]',
})
export class Sample2Directive {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightgreen');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }

  constructor(private el: ElementRef) {
    
    el.nativeElement.style.backgroundColor = 'blue';
    // el.nativeElement.classList.add("blue")
   }
   private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  
  }
