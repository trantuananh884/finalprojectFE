import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {BlogIn} from '../model/in/BlogIn';
import {environment} from "../../environments/environment";
import {Blog} from "../model/in/Blog";
import {SystemResponse} from "../model/response/SystemResponse";

const API_URL = `${environment.apiURL}`

@Injectable({
  providedIn: 'root'
})


export class BlogService {

  constructor(private httpClient: HttpClient) {
  }

  addBLog(blog: Blog): Observable<BlogIn> {
    return this.httpClient.post<BlogIn>(`${API_URL}blogs`, blog);
  }

  // updateBlog(blog : )

  getBlog(id : number) : Observable<SystemResponse>{
    console.log(id);
    return this.httpClient.get<SystemResponse>(`${API_URL}blogs/${id}`);
  }
}
