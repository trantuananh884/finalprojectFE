import { Component, OnInit } from '@angular/core';
import {JwtService} from "../service/jwt.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private jwtService : JwtService,private route : Router) { }

  ngOnInit(): void {
    this.jwtService.logout();
    this.route.navigateByUrl("/login")
  }

}
