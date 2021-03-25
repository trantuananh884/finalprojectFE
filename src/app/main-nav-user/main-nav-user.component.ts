import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {JwtService} from '../service/jwt.service';
import {BlogService} from '../service/blog.service';
import {Blog} from '../model/in/Blog';

@Component({
  selector: 'app-main-nav-user',
  templateUrl: './main-nav-user.component.html',
  styleUrls: ['./main-nav-user.component.css']
})
export class MainNavUserComponent implements OnInit{
blogs?:Blog[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  rememeberMe? : string;
  username? : string;
  userId? : string;
  constructor(private breakpointObserver: BreakpointObserver,private jwtService : JwtService,private blogService:BlogService) {}
  ngOnInit(): void {
    this.rememeberMe = this.jwtService.loggedIn;
    if (this.rememeberMe === "loggedNotRemember"){
      this.getUserNameInSession();
      this.getUserIdInSession();
    }else if (this.rememeberMe === "loggedAndRemember"){
      this.getUsernameInLocalStorage();
      this.getUserIdInLocalStorage();
    }
    this.blogService.getPersonalBlogs().subscribe(res=>{
      this.blogs = res.data;
    })
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
