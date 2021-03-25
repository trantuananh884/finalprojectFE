import { Component, OnInit } from '@angular/core';
import {JwtService} from "../service/jwt.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  rememeberMe? : string;
  username? : string;
  userId? : string;
  constructor(private jwtService : JwtService) { }

  ngOnInit(): void {
    this.rememeberMe = this.jwtService.loggedIn;
    if (this.rememeberMe === "loggedNotRemember"){
      this.getUserNameInSession();
      this.getUserIdInSession();
    }else if (this.rememeberMe === "loggedAndRemember"){
      this.getUsernameInLocalStorage();
      this.getUserIdInLocalStorage();
    }
  }

  getUserNameInSession() {
    this.username = this.jwtService.getUserNameInSession();
  }

  getUserIdInSession(){
    this.userId = this.jwtService.getUserIdInSession();
  }

  private getUsernameInLocalStorage() {
    this.username = this.jwtService.getUserNameInLocalStorage();
  }

  private getUserIdInLocalStorage() {
    this.userId = this.jwtService.getUserIdInLocalStorage();
  }
}
