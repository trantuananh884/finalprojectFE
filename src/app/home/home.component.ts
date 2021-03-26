import { Component, OnInit } from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Blog} from '../model/in/Blog';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayDefault: boolean = true;
  displaySearch : boolean = false;
  blogs?: Blog[] = [];
  blogtop5viewd?: Blog[];
  blogtop5liked?: Blog[];
  pageSlice;
  searchkey?: string;

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getAllPublicBlogs().subscribe(res => {
      console.log(res)
      this.blogs= res.data;
      this.pageSlice= this.blogs.slice(0,5)
      this.blogs = res.data;
      this.pageSlice = this.blogs.slice(0, 5)
    })
    this.blogService.get5topviewed().subscribe(res => {
      this.blogtop5viewd = res.data;
      console.log(this.blogtop5viewd)
    })
    this.blogService.get5topliked().subscribe(res=>{
      this.blogtop5liked=res.data;
      console.log(this.blogtop5liked)
    })
  }

  OnPageChange(envent: PageEvent) {
    console.log("phan trang dược gọi")
    const startIndex = envent.pageIndex * envent.pageSize;
    console.log(envent.pageIndex)
    let endIndex = startIndex + envent.pageSize;
    if (endIndex > this.blogs.length) {
      endIndex = this.blogs.length;
    }
    this.pageSlice = this.blogs.slice(startIndex, endIndex);

  }

  search() {
    console.log(this.searchkey)
    this.blogService.searchBlog(this.searchkey).subscribe(res => {
      this.blogs = res.data
      this.displayDefault = false;
      this.displaySearch = true;
    }, error => {
      this.blogs = [{}, {}, {}]
      console.log(error)
      this.displayDefault = false;
      this.displaySearch = false;
    })

  }

}
