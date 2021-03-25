import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {JwtService} from "../service/jwt.service";
import {UserPasswordIn} from "../model/in/UserPasswordIn";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reclaim',
  templateUrl: './reclaim.component.html',
  styleUrls: ['./reclaim.component.css']
})
export class ReclaimComponent implements OnInit {

  passwordFrom = new FormGroup({
    password: new FormControl('')
  });

  constructor(private activateRouter: ActivatedRoute,
              private jwtService: JwtService,
              private router: Router) {
  }

  ngOnInit(){
  }

  clickSend() {
    const token = this.activateRouter.snapshot.params['token'];
    console.log(this.passwordFrom.value.password);
    // @ts-ignore
    this.jwtService.sendEmailPassword(token, {password : this.passwordFrom.value.password}).subscribe(() => {
      console.log(this.passwordFrom.value);
      this.router.navigateByUrl('/login');
    })
  }
}
