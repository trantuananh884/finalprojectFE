import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SystemResponse} from "../model/response/SystemResponse";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {StatusOut} from "../model/out/StatusOut";

const API_URL = `${environment.apiURL}`
@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private httpClient : HttpClient) {
  }

  getAllLikes(blogId : any): Observable<SystemResponse>{
    return this.httpClient.get<SystemResponse>(`${API_URL}blogs/${blogId}/likes`);
  }

  likeOrDislike(statusOut : StatusOut,id : number) : Observable<SystemResponse>{
    return this.httpClient.patch<SystemResponse>(`${API_URL}blogs/${id}/likes`,statusOut);
  }
}
