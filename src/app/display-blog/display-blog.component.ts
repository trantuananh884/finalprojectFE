import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Blog} from '../model/blog';
import {Tag} from '../model/tag';

class Fruit {
  name?:string
}

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent {
  blog?:Blog ={
    tags : "blog,bloghub"
  }
  tagsarray?:string[]
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tag:Tag={}
  tags: Tag[] = [

  ];



  constructor() { }

  ngOnInit(): void {
    this.tagsarray = this.blog.tags.split(",")
    for (let i = 0; i < this.tagsarray.length; i++) {
      this.tag.name =this.tagsarray[i];
      this.tags.push(this.tag);
    }

  }





}
