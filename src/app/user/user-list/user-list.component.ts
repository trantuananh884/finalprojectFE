import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../service/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {SystemResponse} from "../../model/SystemResponse";
import {Role} from "../../model/Role";
import {AccountOut} from "../../model/Account-out";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  block: any;
  roleName: any;
  checkBoolean: boolean;
  displayedColumns: string[] = ['id', 'username', 'firstname', 'lastname', 'email', 'role', 'locked', 'createdAt', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serviceUser: UserService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.serviceUser.getAll().subscribe(value => {
      console.log("done")
      this.users = value;
      console.log(value)
      this.users = new MatTableDataSource(this.users.data);
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
    }, error => {
      console.log(error);
    });
  }

  clickMethod(id: number) {
    if (confirm('Are you sure to delete Account?')) {
      this.serviceUser.delete(id).subscribe();
      alert('Deleted successfully!');
    }
    this.getAll();
  }

  clickBlock(id: number, locked: boolean) {
    console.log(locked)
    if (locked == true) {
      let unlocked: AccountOut = {
        locked: true
      }
      this.serviceUser.block(id, unlocked).subscribe(value => {
        console.log(value)
        alert("User locked");
        this.getAll();
      })
    }else{
      let unlocked: AccountOut = {
        locked: false
      }
      this.serviceUser.block(id, unlocked).subscribe(value => {
        alert("User unlocked")
        this.getAll();
      })
    }
  }
}
