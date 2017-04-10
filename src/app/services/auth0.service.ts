// ./auth.service.ts

import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;


@Injectable()
export class Auth {
  
  // Configure Auth0
  lock = new Auth0Lock('Q0VquIM3AB5F3s61BOrinXkJ3SuZKV1g', 'dgmz2.eu.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
      localStorage.setItem('id_token', authResult.idToken);
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
  };
}