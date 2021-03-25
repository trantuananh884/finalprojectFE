import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let userRoleInLocalStorage = this.jwtService.getUserRoleInLocalStorage();
    let userRoleInSession = this.jwtService.getUserRoleInSession();
    if ((this.jwtService.loggedIn == "loggedNotRemember" || this.jwtService.loggedIn == "loggedAndRemember")
      && (route.data.roles.includes(userRoleInLocalStorage) || route.data.roles.includes(userRoleInSession))) {
      return true
    } else {
      console.log(2)
      this.router.navigateByUrl('/login')
      return false
    }
  }
}
