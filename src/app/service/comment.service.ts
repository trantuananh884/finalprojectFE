import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SystemResponse} from "../model/response/SystemResponse";
import {environment} from "../../environments/environment";
import {CommentOut} from "../model/out/CommentOut";


const API_URL = `${environment.apiURL}`
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient : HttpClient) { }

  getAllcomment(id : any): Observable<SystemResponse>{
    console.log(`${API_URL}blogs/${id}/comments`)
    return this.httpClient.get(`${API_URL}blogs/${id}/comments`);
  }
  postComment(id : any,commentOut : CommentOut) : Observable<SystemResponse>{
    return this.httpClient.post<SystemResponse>(`${API_URL}blogs/${id}/comments`,commentOut);
  }
  deleteComment(id : any,commentId : any): Observable<SystemResponse>{
    return this.httpClient.delete(`${API_URL}blogs/${id}/comments/${commentId}`);
  }
  updateComment(id : any,commentId : any,commentout : CommentOut): Observable<SystemResponse>{
    console.log(`${API_URL}blogs/${id}/comments/${commentId}`);
    return this.httpClient.patch(`${API_URL}blogs/${id}/comments/${commentId}`,commentout);
  }
}
