import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private register_Url = "http://localhost:3000/user/volregister";
  private login_Url = "http://localhost:3000/user/vologin";

  constructor(private  http: HttpClient) { }

  registerUser( user ){
    return this.http.post<any>(this.register_Url, user);
  }

  loginUser( user ){
    return this.http.post<any>(this.login_Url, user);
  }
}
