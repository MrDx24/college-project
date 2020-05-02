import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-volregister-form',
  templateUrl: './volregister-form.component.html',
  styleUrls: ['./volregister-form.component.css']
})
export class VolregisterFormComponent implements OnInit {

  registerUserData = {};

  constructor(private auth: AuthService,
              private fb: FormBuilder ) { }

  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      bgroup: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]],
      mobile: ['', Validators.required],
      area: ['', Validators.required],
    });
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    ); }

    get username() {
      return this.registerForm.get('username');
    }

    get bgroup() {
      return this.registerForm.get('bgroup');
    }


    get email() {
      return this.registerForm.get('email');
    }

    get password() {
      return this.registerForm.get('password');
    }

    get mobile() {
      return this.registerForm.get('mobile');
    }

    get area() {
      return this.registerForm.get('area');
    }

}
