import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SystemResponse} from "../../model/response/SystemResponse";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class AdminBlogService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<SystemResponse> {
    console.log(API_URL + 'blogs')
    return this.http.get<SystemResponse>(API_URL + 'blogs');
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + `blogs/${id}`);
  }

  findById(id: number): Observable<SystemResponse> {
    return this.http.get<SystemResponse>(API_URL + `blogs/${id}`);
  }
}
