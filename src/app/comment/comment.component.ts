import {Component, OnInit} from '@angular/core';
import {JwtService} from "../service/jwt.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../service/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentOut} from "../model/out/CommentOut";
import {CommentIn} from "../model/in/CommentIn";

// @ts-ignore
import $ from "jquery";
// import * as $ from 'jquery';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  loggedIn?: boolean;
  userName?: any;
  allComments?: CommentIn[]
  commentForm = new FormGroup({
    content: new FormControl('')
  });

  updateForm = new FormGroup({
    content: new FormControl('')
  })

  constructor(private jwtService: JwtService, private commentService: CommentService, private activeRoute: ActivatedRoute, private route: Router) {
  }


  ngOnInit(): void {
    this.checkLoggedIn()
    this.getALlComment();
  }

  comment() {
    let commentOut: CommentOut = this.commentForm.value;
    this.commentService.postComment(this.getPathvariable(), commentOut).subscribe(res => {
      console.log(res);
      window.location.reload();
    }, error => {
      console.log(error)
    })
  }

  getPathvariable() {
    return this.activeRoute.snapshot.params['id'];
  }

  getALlComment() {
    console.log(this.activeRoute.snapshot.params['id'] + "Aaaaaaaaaaaaaaaaaaaaa")
    this.commentService.getAllcomment(this.getPathvariable()).subscribe(res => {
      console.log(res)
      this.allComments = res.data;
      console.log(this.allComments)
    }, error => {
      console.log(error)
    })
  }

  deleteComment(id: any) {
    this.commentService.deleteComment(this.getPathvariable(), id).subscribe(res => {
      console.log(res)
      window.location.reload();
    }, error => {
      console.log(error)
    })
  }

  showUpdateForm(id: any) {
    $(`#input${id}`).show();
  }

  hideForm(id: any) {
    $(`#input${id}`).hide();
  }

  private checkLoggedIn() {
    if ((this.jwtService.loggedIn == "loggedNotRemember" || this.jwtService.loggedIn == "loggedAndRemember")) {
      this.loggedIn = true;
      this.userName = this.jwtService.getUserNameInLocalStorage();
      if (this.userName == null) {
        this.userName = this.jwtService.getUserNameInSession();
      }
    }
  }

  update(id) {
    let content = $(`#val${id}`).val();
    console.log(this.getPathvariable())
    console.log(id)
    console.log(content)
    this.commentService.updateComment(this.getPathvariable(), id,{content: content}).subscribe(res => {
      console.log(res);
      window.location.reload();
    }, error => {
      console.log(error);
    })
  }
}
