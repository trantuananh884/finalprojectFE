import { Component, OnInit } from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Blog} from '../model/in/Blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blogs? :Blog[];
blogtop5viewd? :Blog[];
blogtop5liked?:Blog[];
  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPublicBlogs().subscribe(res=>{
      console.log(res)
      this.blogs= res.data;
    })
    this.blogService.get5topviewed().subscribe(res=>{
      this.blogtop5viewd=res.data;
      console.log(this.blogtop5viewd)
    })
  }

}
