import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {JwtService} from "../jwt.service";

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


  constructor(private jwtService : JwtService) { }

  ngOnInit(): void {
  }

  login() {
    this.jwtService.login(this.loginForm.value).subscribe(res=>{
      console.log(res)
    },error => {
      console.log(error)
    })
  }
}
