import {Component, OnInit} from '@angular/core';
import {BlogService} from "../../../service/blog.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AdminBlogService} from "../../../service/admin/admin-blog.service";

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.css']
})
export class BlogInfoComponent implements OnInit {

  blog: any;

  constructor(private blogService: AdminBlogService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.findBlogById(id);
    })
  }

  ngOnInit(): void {
  }

  findBlogById(id: number) {
    this.blogService.findById(id).subscribe(value => {
      this.blog = value.data;
      console.log(this.blog.data)
    }, error => {
      console.log(error)
    })
  }
}
