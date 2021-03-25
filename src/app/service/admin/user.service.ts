import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import firebase from "firebase";
import User = firebase.User;
import {AccountOut} from "../../model/Account-out";
import {SystemResponse} from "../../model/response/SystemResponse";

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<SystemResponse> {
    return this.http.get<SystemResponse>(API_URL + 'profile');
  }

  findById(id: number): Observable<SystemResponse> {
    return this.http.get<SystemResponse>(API_URL + `profile/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + `profile/${id}`);
  }

  block(id?: number, accountOut?: AccountOut): Observable<any> {
    console.log(accountOut)
    console.log(API_URL + `profile/${id}/block`)
    return this.http.patch<any>(API_URL + `profile/${id}/block`, accountOut);
  }
}
