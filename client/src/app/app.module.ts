import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VologinFormComponent } from './vologin-form/vologin-form.component';
import { VolregisterFormComponent } from './volregister-form/volregister-form.component';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterationFormComponent,
    ForgotPasswordComponent,
    VologinFormComponent,
    VolregisterFormComponent,
    HeaderComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
