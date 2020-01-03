import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageValidator]'
})
export class ImageValidatorDirective {

  constructor(private elRef: ElementRef, private form: NgForm) { }

  @HostListener('input')
  inputHandler() {
    let element: string = this.elRef.nativeElement.value;
    if (element.startsWith('https')
      && element.endsWith('png')
      || element.endsWith('jpg')) {
      this.elRef.nativeElement.style.borderColor = 'green';
      this.form.control.setErrors(null);
    } else {
      this.elRef.nativeElement.style.borderColor = 'red';
      this.form.control.setErrors({ imageUrl: true });
    }
  }

}
