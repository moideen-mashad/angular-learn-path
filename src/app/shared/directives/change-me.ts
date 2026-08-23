import { Directive } from '@angular/core';

@Directive({
  selector: '[appChangeMe]',
})
export class ChangeMe {
  constructor() {}
}
