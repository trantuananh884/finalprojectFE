import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProfileUser} from "../model/profile-user";
import {SystemResponse} from "../model/response/SystemResponse";
import {UserPasswordIn} from "../model/in/UserPasswordIn";

const API_URL = `${environment.apiURL}`

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  constructor(private httpClient: HttpClient) {
  }

  findUserById(id: number): Observable<SystemResponse> {
    return this.httpClient.get<SystemResponse>(`${API_URL}profile/${id}`);
  }

  updateProfile(id: number, user: ProfileUser): Observable<ProfileUser> {
    return this.httpClient.patch<ProfileUser>(`${API_URL}profile/${id}/update`, user);
  }

  findIdChangePassword(id: number): Observable<UserPasswordIn> {
    return this.httpClient.get<UserPasswordIn>(`${API_URL}profile/${id}`);
  }

  updatePassword(id: number, user: UserPasswordIn):  Observable<UserPasswordIn> {
    return this.httpClient.patch<UserPasswordIn>(`${API_URL}profile/${id}/password`, user);
  }
}
