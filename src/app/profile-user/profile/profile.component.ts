import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {MatSort} from '@angular/material/sort';
import {Account} from "../../model/Account";
import {ProfileUserService} from "../../service/profile-user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  account: Account;
  dataSource: any;
  @ViewChild(MatSort) sort?: MatSort;
// update-profile\

  id?: number;
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })
  //updatePassword
  passwordForm = new FormGroup({
    password: new FormControl('')
  })

  avatarURL?: string;

  constructor(private userService: ProfileUserService,
              private activateRoute: ActivatedRoute,
              private route: Router) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.findAccountById(id);
    })
  }

  ngOnInit(): void {
    this.getPathvariable();
    this.getUpdateProfile();
    this.getUpdatePassword();
  }

  findAccountById(id: number) {
    this.userService.findUserById(id).subscribe(value => {
      console.log(value)
      this.account = value.data;
      console.log(this.account)
    }, error => {
      console.log(error)
    });
  }

  //update-profile
  getPathvariable() {
    this.id = this.activateRoute.snapshot.params['id'];
  }

  getUpdateProfile() {
    this.userService.findUserById(this.id).subscribe(result => {
      this.userForm = new FormGroup({
        firstName: new FormControl(result.data.firstName, [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl(result.data.lastName, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(result.data.email, [Validators.required, Validators.minLength(3)]),
      });
    });
  }

  updateProfile() {
    this.userService.updateProfile(this.id, this.userForm.value).subscribe(result => {
      console.log(result);
      // this.route.navigate(['/profile/', this.id])
    }, error => {
      console.log(error);
    });
  }

  //up anh firebase

  getImageUrl($even) {
    console.log('goi ham upload')
    this.avatarURL = $even;
    console.log('URL', $even)
    this.userForm.value.avatarURL = $even;
    console.log("avatarUrl", this.userForm.value.avatarURL)
    console.log($even)
  }

  //update Password
  getUpdatePassword() {
    this.userService.findIdChangePassword(this.id).subscribe(result => {
      this.passwordForm = new FormGroup({
        password: new FormControl(result.password, [Validators.required, Validators.minLength(3)])
      });
    });
  }

  updatePassword() {
    this.userService.updatePassword(this.id, this.passwordForm.value).subscribe(result => {
      console.log(result);
      // this.route.navigate(['/logout'])
    }, error => {
      console.log(error);
    });
  }
}
