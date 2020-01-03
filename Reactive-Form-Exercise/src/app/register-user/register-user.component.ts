import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  private areaCodes: Array<string> = ["+359", "+721", "+123"];
  private form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('')]],
      areaCode: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('')]],
      jobTitle: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('')]],
      imageURL: ['', [Validators.required]],
    });
  }

  register(){
    console.log(this.form.value);
  }

  get f() {
    return this.form.controls;
  }

}
