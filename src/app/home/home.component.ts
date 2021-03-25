import { Component, OnInit } from '@angular/core';
import {BlogService} from '../service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPublicBlogs().subscribe(res=>{
      console.log(res)
    })
  }

}
