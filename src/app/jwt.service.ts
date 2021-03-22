import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {environment} from "../environments/environment";
import {UserSignUp} from "./model/UserSignUp";
import {UserLogin} from "./model/UserLogin";

const API_URL = `${environment.apiURL}`

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

  // login(userLogin : UserLogin) {
  //   console.log(userLogin)
  //   return this.httpClient.post<{token:  string}>(`${API_URL}/login`, {userLogin}).pipe(tap(res => {
  //     console.log(res.token)
  //     localStorage.setItem('token', res.token);
  //   }))
  // }

  login(userLogin : UserLogin) {
    console.log(userLogin)
    return this.httpClient.post<{token:  string}>(`${API_URL}/login`, userLogin).pipe(tap(res => {
      console.log(res)
      localStorage.setItem('token', res.token);
    }));
  }

  register(userSignUp : UserSignUp) {
    return this.httpClient.post<{access_token: string}>(`${API_URL}/register`, userSignUp).pipe(tap(res => {
      console.log(res)
    }))
  }


  // register(userSignUp : UserSignUp) {
  //   return this.httpClient.post<{access_token: string}>(`${API_URL}/register`, {userSignUp}).pipe(tap(res => {
  //     this.login(email, password)
  //   }))
  // }
}
