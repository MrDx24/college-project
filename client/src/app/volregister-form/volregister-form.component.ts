import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-volregister-form',
  templateUrl: './volregister-form.component.html',
  styleUrls: ['./volregister-form.component.css']
})
export class VolregisterFormComponent implements OnInit {

  registerUserData = {}

  constructor(private _auth:AuthService ) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )}


}
