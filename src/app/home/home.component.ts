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

  ngOnInit() {
    this.getAllUsers();
  }
  
  getAllUsers()
  {
    let headers = new HttpHeaders({
      'Authorization': this.authService.getAuthorizationHeaderValue(),
       responseType: 'text'
    })

    this.http.get<any>("/api/Token/Users", { headers: headers })
      .subscribe(
        response => this.response =response,
        err => console.log("angular is trash"));
   }
}
