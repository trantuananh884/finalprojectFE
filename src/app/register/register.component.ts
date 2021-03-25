import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JwtService} from "../service/jwt.service";
import {UserSignUp} from "../model/out/UserSignUp";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)])

  });
  message? : String;
  userSignUp? : UserSignUp = {};
  constructor(private jwtService : JwtService) { }

  ngOnInit(): void {
  }

  register() {
    if(this.registerForm.value.confirmPassword != this.registerForm.value.password){
      this.message = "confirm password is incorrect";
      return;
    }
    this.userSignUp.username = this.registerForm.value.username;
    this.userSignUp.password = this.registerForm.value.password;
    this.userSignUp.email = this.registerForm.value.email;
    console.log(this.userSignUp)
    this.jwtService.register(this.userSignUp).subscribe(res=>{
      this.message = res.message;
    },error => {
      this.message = error.error.message;
    })
  }
}
