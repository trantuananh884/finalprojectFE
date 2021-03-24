import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Tag} from '../model/tag';
import {Blog} from '../model/in/Blog';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from "../service/category.service";
import {Category} from "../model/category";
import {BlogService} from '../service/blog.service';


@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.css']
})
export class PostpageComponent implements OnInit {
  blog?: Blog = {};
  categories?: Category[];
  categoryId?: number;
  title?: string
  previewImageURL?: string
  shortDescription?: string
  privacy?: boolean = true
  tags?: string = ""
  content?: string

  constructor(private categoryService: CategoryService, private blogService: BlogService) {
  }

  titleForm = new FormControl('')

  ngOnInit(): void {
    this.getCategory();
  }

  getImageUrl(url) {
    this.previewImageURL = url;
  }

  getTagArray(tags: Tag []) {
    this.tags = "";
    for (let i = 0; i < tags.length; i++) {
      this.tags = this.tags + tags[i].name + ",";
    }
    this.tags = this.tags.slice(0, this.tags.length - 1)
  }

  getContentFromTexteditor(content: string) {
    this.content = content;
  }

  createBlog() {
    this.blog.title = this.title
    this.blog.content = this.content
    this.blog.previewImageURL = this.previewImageURL
    this.blog.tags = this.tags
    this.blog.privacy = this.privacy
    this.blog.shortDescription = this.shortDescription
    console.log(this.categoryId);
    console.log(this.blog.categoryId = this.categoryId)
    if (this.categoryId + "" == "undefined"){
      this.categoryId = 1;
    }
    this.blog.categoryId = this.categoryId;
    this.blogService.addBLog(this.blog).subscribe(res =>{
      console.log(res)
    },error => {console.log(error)})
  }

  getCategory() {
    this.categoryService.getAll().subscribe(value => {

      // this.categories = value.value
    });
  }
}
