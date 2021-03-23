import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private router : Router) { }

  public changeToPageError(error : any){
    switch (error){
      case 404 :
        this.router.navigateByUrl("not_found");
        break;
      case 403 :
        this.router.navigateByUrl("forbidden")
    }
  }
}
