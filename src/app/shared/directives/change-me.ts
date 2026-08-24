import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeMe]',
})
export class ChangeMe {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
