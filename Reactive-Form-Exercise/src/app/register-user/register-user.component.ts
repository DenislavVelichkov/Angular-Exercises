import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  private areaCodes: Array<string> = ["+359", "+721", "+123"];
  private registerForm: any; 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      areaCode: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/\d{9}/)]],
      jobTitle: ['', [Validators.required]],

      passwords: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }),

      imageURL: ['', [Validators.required]],
    });
  }

  register(){
    console.log(this.registerForm);
  }

  get f() {
    return this.registerForm.controls;
  }

}
