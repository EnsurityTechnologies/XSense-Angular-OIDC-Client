import { Component } from '@angular/core';

import { Router } from "@angular/router";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
    currentUser: boolean=false;
   
    constructor(
    private authenticationService: AuthService,
    private router:Router
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    logout()
    {
      this.authenticationService.LogOut();
      this.currentUser=false;
      this.router.navigate(['/login']);
    }
}
