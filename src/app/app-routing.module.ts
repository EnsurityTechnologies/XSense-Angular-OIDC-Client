import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import {LoginComponent} from '../../src/app/login/login.component';
import {HomeComponent} from "./home/home.component";
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'auth-callback', component: AuthCallbackComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, AuthService]
})
export class AppRoutingModule { }
