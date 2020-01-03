import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private areaCodes: Array<string> = ["+359", "+721", "+123"];
  @ViewChild('registerForm', { static: false })
  registerForm: NgForm;

  constructor() { }

  ngOnInit() { }

  register(formData: FormData) {
    if (this.registerForm.valid) {
      console.log(formData);
      this.registerForm.reset();
    }

  }

}
