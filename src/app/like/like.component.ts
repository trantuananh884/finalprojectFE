import {Component, OnInit} from '@angular/core';
import {LikeService} from "../service/like.service";
import {ActivatedRoute} from "@angular/router";
import {StatusIn} from "../model/in/StatusIn";
import {StatusOut} from "../model/out/StatusOut";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  likes: StatusIn[];
  likedNumber?: number;
  youLiked?: boolean;

  constructor(private likeService: LikeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.getPathvariable();
    this.getAlBlogLikes(id);
  }

  getAlBlogLikes(blogId: number) {
    this.likeService.getAllLikes(blogId).subscribe(res => {
      this.likes = res.data;
      this.likedNumber = this.checkLiked(this.likes);
      this.youLiked = this.checkYouLiked(this.likes);
    }, error => {
      console.log(error)
    })
  };

  private getPathvariable() {
    return this.activatedRoute.snapshot.params['id'];
  }

  checkLiked(likes: StatusIn[]) {
    let count = 0;
    if (likes.length == 0) {
      return count;
    }
    for (let i = 0; i < likes.length; i++) {
      let checkSession: boolean = likes[i].userId != sessionStorage.getItem('userId');
      let checkLocalStorage: boolean = likes[i].userId != localStorage.getItem('userId');
      if (likes[i].liked == true && checkSession && checkLocalStorage) {
        count++;
      }
    }
    return count;
  }

  private checkYouLiked(likes: StatusIn[]) {
    for (let i = 0; i < likes.length; i++) {
      let checkSession: boolean = likes[i].userId == sessionStorage.getItem('userId');
      let checkLocalStorage: boolean = likes[i].userId == localStorage.getItem('userId');
      if (likes[i].liked == true && (checkSession || checkLocalStorage)) {
        return true;
      }
    }
  }

  likeOrDislike() {
    console.log(1);
    const id = this.getPathvariable();

    this.likeService.likeOrDislike({isLiked: true}, id).subscribe(res => {
      this.youLiked = !this.youLiked;
    }, error => {
      console.log(error);
    })
  }
}
