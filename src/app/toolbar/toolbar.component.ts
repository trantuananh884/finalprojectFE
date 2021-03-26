import {Component, OnInit} from '@angular/core';
import {JwtService} from "../service/jwt.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  rememeberMe?: string;
  username?: string;
  userId?: string;
  isAdmin?: boolean;

  constructor(private jwtService: JwtService) {
  }

  ngOnInit(): void {
    this.rememeberMe = this.jwtService.loggedIn;
    if (this.rememeberMe === "loggedNotRemember") {
      this.getUserNameInSession();
      this.getUserIdInSession();
    } else if (this.rememeberMe === "loggedAndRemember") {
      this.getUsernameInLocalStorage();
      this.getUserIdInLocalStorage();
    }
    this.getRoleUser();
  }

  getRoleUser() {
    if (this.jwtService.getUserRoleInLocalStorage() == 'ADMIN' || this.jwtService.getUserRoleInSession() == "ADMIN") {
      console.log(this.isAdmin)
      this.isAdmin = true;
    }

  }

  getUserNameInSession() {
    this.username = this.jwtService.getUserNameInSession();
  }

  getUserIdInSession() {
    this.userId = this.jwtService.getUserIdInSession();
  }

  private getUsernameInLocalStorage() {
    this.username = this.jwtService.getUserNameInLocalStorage();
  }

  private getUserIdInLocalStorage() {
    this.userId = this.jwtService.getUserIdInLocalStorage();
  }
}
