// ./auth.service.ts

import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  //Store profile object in auth class
  userProfile: Object;

  // Configure Auth0
  lock = new Auth0Lock('Q0VquIM3AB5F3s61BOrinXkJ3SuZKV1g', 'dgmz2.eu.auth0.com', {});

  constructor() {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
      localStorage.setItem('id_token', authResult.idToken);
      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error:any, profile:any) => {
        if (error) {
            // Handle error
            alert(error);
            return;
          }
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  };

  public login(){
      this.lock.show();
  }

  public authenticated(){
      return tokenNotExpired();
  }

  public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  };
}