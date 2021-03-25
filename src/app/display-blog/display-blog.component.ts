import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Blog} from '../model/in/Blog';
import {Tag} from '../model/tag';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute} from '@angular/router';


class Fruit {
  name?:string
}

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})

export class DisplayBlogComponent {
  blog?:Blog;
  tagsarray?:string[];
  tags:String[];



  constructor(private blogService : BlogService,private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.getIdURL();
    console.log(2)
    this.blogService.getBlog(id).subscribe(res=>{
      this.blog = res.data;

      this.tags = this.getTag(this.blog.tags)
    },error => {
      console.log(error)
    })
  }

  getTag(tags : string){
    return tags.split(",");
  }


  private getIdURL() {
    return this.activeRoute.snapshot.params['id'];
  }

}


