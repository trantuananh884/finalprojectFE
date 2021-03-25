import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {UserSignUp} from "../model/out/UserSignUp";
import {UserLogin} from "../model/out/UserLogin";
import {Observable} from "rxjs";
import {SystemResponse} from "../model/response/SystemResponse";
import {Email} from "../model/email";
import {UserPasswordIn} from "../model/in/UserPasswordIn";


const API_URL = `${environment.apiURL}`


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) {
  }

  login(userLogin: UserLogin, rememberMe: boolean) {
    console.log(userLogin)
    return this.httpClient.post<{ id: any, token: string, username: string, roles: any }>(`${API_URL}login`, userLogin).pipe(tap(res => {
      if (rememberMe == true) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.username);
        localStorage.setItem('roles', res.roles);
        localStorage.setItem('userId', res.id)
      } else {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('roles', res.roles);
        sessionStorage.setItem('userId', res.id)
      }
    }, error => {
      console.log("a")
      console.log(error)
    }));
  }

  register(userSignUp: UserSignUp): Observable<SystemResponse> {
    return this.httpClient.post<SystemResponse>(`${API_URL}register`, userSignUp).pipe(tap(res => {
        console.log(res)
      }, error => {
        console.log(error)
      }
    ))
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
    localStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('roles');
    sessionStorage.removeItem('userId');
  }

  public get loggedIn(): string {
    if (sessionStorage.getItem('token') !== null) {
      return "loggedNotRemember";
    } else if (localStorage.getItem('token') !== null) {
      return "loggedAndRemember";
    }
    return "notLogged";
  }

  sendEmail(email: Email){
    return this.httpClient.post<Email>(API_URL + 'reclaim', email)
  }

  sendEmailPassword(token: string, userPasswordIn: UserPasswordIn) : Observable<SystemResponse>{
    console.log(userPasswordIn)
    return this.httpClient.post<SystemResponse>(API_URL + `reclaim/${token}`,userPasswordIn);
  }

  public getUserNameInLocalStorage() {
    return localStorage.getItem('username');
  }

  public getUserIdInLocalStorage() {
    return localStorage.getItem('userId');
  }

  public getUserNameInSession() {
    return sessionStorage.getItem('username');
  }

  public getUserIdInSession() {
    return sessionStorage.getItem('userId');
  }

}
