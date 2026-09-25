import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormBuilder);

  isEditing =false;

  loginForm = this.fb.group({

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
  

  });

  userData={
    email:'w@gmail.com',
    password:'1234567'
  };

  constructor() {

  this.loginForm.valueChanges.subscribe(value => {
    console.log('Form Value:', value);
  });

  this.loginForm.statusChanges.subscribe(status => {
    console.log('Form Status:', status);
  });

  this.loginForm.controls.email.valueChanges.subscribe(value => {
    console.log('Email Changed:', value);
  });

}

  editProfile(){
    this.loginForm.patchValue({
      email:this.userData.email,
      password:this.userData.password
    });
    this.isEditing=true;
  }

  resetForm(){
    this.loginForm.reset();
  }
  saveProfile() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);
    this.isEditing=false;
  }
}