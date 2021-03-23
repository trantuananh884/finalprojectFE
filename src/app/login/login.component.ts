import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {JwtService} from "../service/jwt.service";
import {Router} from "@angular/router";
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
  errorMessage? : any
  constructor(private jwtService: JwtService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.jwtService.login(this.loginForm.value,this.rememberMe).subscribe(() => {
      this.router.navigateByUrl("titlebar")
    }, error => {
      this.errorMessage = error;
      console.log(this.errorMessage)
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
}
