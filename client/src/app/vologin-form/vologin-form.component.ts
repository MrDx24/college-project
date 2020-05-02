import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vologin-form',
  templateUrl: './vologin-form.component.html',
  styleUrls: ['./vologin-form.component.css']
})
export class VologinFormComponent implements OnInit {

  loginForm: FormGroup;
  loginUserData = {};
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]]
    });
  }

login() {

  this.auth.loginUser(this.loginUserData).subscribe(
    res => console.log(res),
    err => console.log(err)
  );
}

onSignUpClick() {
  this.router.navigate(['/volregister']);
}

onfgPsswd() {
  this.router.navigate(['/fgpsswd']);
}

onCreateUpdate() {
  this.router.navigate(['/createUpdate']);
}

get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

}
