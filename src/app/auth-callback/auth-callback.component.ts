import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service'
@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styles: []
})
export class AuthCallbackComponent implements OnInit {

  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.authService.completeAuthentication().then(() => {
          this._router.navigate(['/']);
    });
  }

}
