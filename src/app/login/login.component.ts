import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {JwtService} from "../jwt.service";
import {Router} from "@angular/router";

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


  constructor(private jwtService : JwtService,private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    this.jwtService.login(this.loginForm.value).subscribe(()=>{
      this.router.navigateByUrl("/textgit ")
    },error => {
      console.log(error)
    })
  }
}
