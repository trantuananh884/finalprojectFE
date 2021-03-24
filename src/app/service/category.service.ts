import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {SystemResponse} from '../model/response/SystemResponse';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<SystemResponse> {
    console.log(1)
    return this.http.get<SystemResponse>(API_URL + 'categories');
  }

  createNewCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(API_URL + 'categories/create', category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + `categories/${id}`);
  }

  updateCategory(id?: number, category?: Category): Observable<Category> {
    return this.http.put<Category>(`${API_URL}categories/${id}`, category);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}categories/${id}`);
  }
}
