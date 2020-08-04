import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  email: FormControl;
  pwd: FormControl;
  isLoggedInUser = false;
  constructor(private http: HttpClient, private _router: Router, public _authService: AuthService) { }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.email = new FormControl('', [
      Validators.required
    ]);
    this.pwd = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.pwd,
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      let headers = new HttpHeaders({
        'Content-Type': "application/json",
        'Accept': 'application/json'
      })
      this.http.post<any>("http://localhost:52409/api/Token/authenticate", { Username: this.myform.value.email, Password: this.myform.value.password }, { headers: headers })
        .subscribe(
          (response) => {
            if (response.token != null) {
               console.log(response.token);
            }
            else {

            }
          },
          (error) => {
            switch (error.status) {
              case 403:      //login
                alert("Invalid Credentials");
                break;
              default:
                alert("Bad request");

            }
            this.myform.reset();
          }
        )
    }
    else {
      alert("Please enter Username and Password");
    }
  }

  LoginWithIDP() {
    this._authService.startAuthentication();
  }
  isLoggedIn() {
    this.isLoggedInUser = this._authService.isLoggedIn();
  }

}
