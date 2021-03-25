import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/admin/user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  account: any;

  constructor(private userService: UserService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.findAccountById(id);
    })
  }

  ngOnInit(): void {
  }

  findAccountById(id: number) {
    this.userService.findById(id).subscribe(value => {
      this.account = value.data;
      console.log(this.account.data)
    }, error =>{
      console.log(error)
    });
  }

}
