/**
 * It's not a good practice to directly access DOM elements via ElementRef.
Angular is not limited to run only on the browser(could run with service workers)
 * Services Worker – environment where the DOM is inaccessible
Use Renderer2 to manipulate DOM elements!!
 */

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageValidator]'
})
export class ImageValidatorDirective {

  constructor(private elRef: ElementRef, private form: NgForm, private renderer: Renderer2) { }

  @HostListener('input')
  inputHandler() {
    let element: string = this.elRef.nativeElement.value;
    if (element.startsWith('https')
      && element.endsWith('png')
      || element.endsWith('jpg')) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'green');
      this.form.control.setErrors(null);
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'red');
      this.form.control.setErrors({ imageUrl: true });
    }
  }

}
