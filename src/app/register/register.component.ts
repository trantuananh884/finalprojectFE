import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JwtService} from "../service/jwt.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)])

  });
  constructor(private jwtService : JwtService) { }

  ngOnInit(): void {
  }

  register() {
    this.jwtService.register(this.registerForm.value).subscribe(res=>{
      console.log(res)
    },error => {
      console.log(error)
    })
  }
}
