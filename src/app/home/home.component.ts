import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  response: any;
  constructor(private authService:AuthService, private http: HttpClient) { }

  public _userProfile: any;
  ngOnInit() {
    this.getAllUsers();
  }
  
  getAllUsers()
  {
     this._userProfile = JSON.stringify(this.authService.getClaims());
  }
}
