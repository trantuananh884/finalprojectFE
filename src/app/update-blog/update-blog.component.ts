import {Component, Input, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Tag} from '../model/tag';
import {Blog} from '../model/in/Blog';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from "../service/admin/category.service";
import {Category} from "../model/category";
import {BlogService} from '../service/blog.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogAddOut} from '../model/out/BlogAddOut';


@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  blogtoupdate?:Blog ={}
  blog?: Blog = {};
  categories?: Category[];
  idCategory?: any;
  title?: string
  previewImageURL?: string
  shortDescription?: string
  privacy?: boolean = true
  tags?: string = ""
  content?: string
  id
  constructor(private categoryService: CategoryService, private blogService: BlogService,private router : Router,private activeRouter:ActivatedRoute) {
  }

  titleForm = new FormControl('')

  ngOnInit(): void {
    this.getCategory();
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.blogService.getBlog(this.id).subscribe(res=>{
        this.blog = res.data;
        this.title = this.blog.title;
        this.shortDescription = this.blog.shortDescription;
        this.content = this.blog.content;
        this.tags = this.blog.tags;
        this.privacy = this.blog.privacy;
        this.idCategory = this.blog.idCategory;
        console.log(this.blog)
      })
  })
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

  updateBlog() {
    console.log("chay vao ham update")
    this.blogtoupdate.title = this.title
    console.log(this.blogtoupdate.title)
    this.blogtoupdate.content = this.content
    console.log(this.blogtoupdate.content)
    if(this.previewImageURL == null){
      this.blogtoupdate.previewImageURl = this.blog.previewImageURl
    }else {
      this.blogtoupdate.previewImageURl = this.previewImageURL
    }
    console.log(this.blogtoupdate.previewImageURl)
    this.blogtoupdate.privacy = this.privacy
    console.log(this.blogtoupdate.privacy)
    this.blogtoupdate.shortDescription = this.shortDescription
    console.log(this.blogtoupdate.shortDescription)
    console.log(this.blogtoupdate.privacy)
    console.log(this.blogtoupdate)
    this.blogService.updateBlog(this.id,this.blogtoupdate).subscribe(res=>{
      console.log(res)
    },error => {
      console.log(error)
    })
  }

  getCategory() {
    console.log(1)
    this.categoryService.getAll().subscribe(value => {
      this.categories = value.data;
      console.log(value)
    },error => {
      console.log(error);
    });
  }

}
