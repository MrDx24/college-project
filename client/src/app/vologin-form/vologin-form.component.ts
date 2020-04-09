import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vologin-form',
  templateUrl: './vologin-form.component.html',
  styleUrls: ['./vologin-form.component.css']
})
export class VologinFormComponent implements OnInit {

  loginUserData = {};
  constructor(
    private router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit() {
  }

login() {

  this._auth.loginUser(this.loginUserData).subscribe(
    res => console.log(res),
    err => console.log(err)
  )
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

}