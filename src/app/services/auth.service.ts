import { Injectable } from '@angular/core';

import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private manager = new UserManager(getClientSettings());
  private user: User = null;
  currentUser = new Subject<boolean>();
  constructor() {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

    completeAuthentication(): Promise<void> {

    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
      console.log(user);
      this.currentUser.next(true);
    });
  }
  LogOut(){
    this.manager.signoutRedirect().then((resp)=> {
        console.log(resp);
      });
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'https://<<tenant>>.ensurityzts.com/',
      client_id: 'angular_spa',
      client_secret:'fd543361-24ab-469d-ae85-34cb13685547',
      redirect_uri: 'https://<<application URL>>/auth-callback',
      post_logout_redirect_uri: 'https://<<application redirection URL>>/',
      response_type: "id_token",
      scope: "openid profile email phone",
      filterProtocolClaims: true,
      loadUserInfo: false
  };
}
