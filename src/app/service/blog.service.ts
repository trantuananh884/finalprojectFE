import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {BlogIn} from '../model/in/BlogIn';
import {environment} from "../../environments/environment";
import {Blog} from "../model/in/Blog";
import {SystemResponse} from "../model/response/SystemResponse";
import {BlogUpdateOut} from '../model/out/BlogUpdateOut';

const API_URL = `${environment.apiURL}`

@Injectable({
  providedIn: 'root'
})


export class BlogService {

  constructor(private httpClient: HttpClient) {
  }

  addBLog(blog: Blog): Observable<SystemResponse> {
    return this.httpClient.post<SystemResponse>(`${API_URL}blogs`, blog);
  }

  // updateBlog(blog : )

  getBlog(id : number) : Observable<SystemResponse>{
    console.log(`${API_URL}blogs/${id}` +"---------ủl")
    return this.httpClient.get<SystemResponse>(`${API_URL}blogs/${id}`);
  }

  getAllPublicBlogs() : Observable<SystemResponse>{
    return this.httpClient.get<SystemResponse>(`${API_URL}blogs/`)
  }
  get5topviewed():Observable<SystemResponse>{
    console.log(3222);
    return this.httpClient.get<SystemResponse>(`${API_URL}blogs/topviews`)
  }
  getPersonalBlogs():  Observable<SystemResponse> {

    return this.httpClient.get<SystemResponse>(`${API_URL}profile/blogs`)

  }
  updateBlog(id:number,blogUpdateOut : BlogUpdateOut): Observable<SystemResponse>{
    return this.httpClient.patch<SystemResponse>(`${API_URL}blogs/${id}`,blogUpdateOut)
  }
get5topliked():Observable<SystemResponse>{
  return this.httpClient.get<SystemResponse>(`${API_URL}blogs/toplikes`)
}
}
