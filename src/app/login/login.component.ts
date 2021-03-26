import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
// import {JwtService} from "../service/jwt.service";

import {Router} from "@angular/router";
import {JwtService} from '../service/jwt.service';
import {Email} from "../model/email";

// import any = jasmine.any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  rememberMe?: any;
  errorMessage?: any;

  emailForm = new FormGroup({
    email: new FormControl(''),
  });


  constructor(private jwtService: JwtService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.jwtService.login(this.loginForm.value, this.rememberMe).subscribe(() => {
      console.log(this.jwtService.getUserRoleInLocalStorage())
      console.log(this.jwtService.getUserRoleInSession())
      console.log( this.jwtService.getUserRoleInSession() == 'MEMBER')
      console.log(this.jwtService.getUserRoleInLocalStorage() == 'MEMBER')
      if (this.jwtService.getUserRoleInLocalStorage() == 'MEMBER' || this.jwtService.getUserRoleInSession() == 'MEMBER' ){
          this.router.navigateByUrl("home")
      }else {
        this.router.navigateByUrl("admin/blogs")
      }

    }, error => {
      this.errorMessage = error.error;
    })
  }

  checkRememberMe(event) {
    console.log(event.target.checked)
    if (event.target.checked == true) {
      this.rememberMe = true;
    } else {
      this.rememberMe = false;
    }
  }


  sendEmail() {
    this.jwtService.sendEmail(this.emailForm.value).subscribe(() => {
      console.log(this.emailForm.value)
      this.router.navigateByUrl("login")
    }, error => {
      this.errorMessage = error.errorMessage;
    })
  }
}
