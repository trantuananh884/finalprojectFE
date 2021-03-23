import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenLocalStorage = localStorage.getItem('token');
    const tokenSessionStorage = sessionStorage.getItem('token');
    if (tokenLocalStorage) {
      const cloned = req.clone({
          headers: req.headers.set("Authorization", "Bearer " + tokenLocalStorage)
        }
      )
      return next.handle(cloned);

    } else if (tokenSessionStorage) {
      const cloned = req.clone({
          headers: req.headers.set("Authorization", "Bearer " + tokenSessionStorage)
        }
      )
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }

  }
}
