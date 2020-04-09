import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VologinFormComponent } from './vologin-form/vologin-form.component';
import { VolregisterFormComponent } from './volregister-form/volregister-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'vologin', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegisterationFormComponent},
  { path: 'fgpsswd', component: ForgotPasswordComponent},
  { path: 'vologin', component: VologinFormComponent},
  { path: 'volregister', component: VolregisterFormComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
