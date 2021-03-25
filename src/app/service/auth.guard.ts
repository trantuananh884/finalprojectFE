import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private jwtService :JwtService, private router : Router) {
  }

  canActivate(): boolean {
    if (this.jwtService.loggedIn == "loggedNotRemember" || this.jwtService.loggedIn == "loggedAndRemember"){
      return true
    }else {
      console.log(2)
      this.router.navigateByUrl('/login')
      return false
    }
  }
}
