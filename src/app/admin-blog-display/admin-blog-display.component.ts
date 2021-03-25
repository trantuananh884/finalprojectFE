import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Blog} from '../model/in/Blog';
import {BlogService} from '../service/blog.service';
import {AdminBlogService} from '../service/admin/admin-blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-blog-display',
  templateUrl: './admin-blog-display.component.html',
  styleUrls: ['./admin-blog-display.component.css']
})
export class AdminBlogDisplayComponent implements OnInit {
@Input() blog?:Blog
  style?: string;
  constructor(private blogAdminService: AdminBlogService,private router:Router) { }

  ngOnInit(): void {
    this.style = "background-image: url(" + this.blog.previewImageURl +")";
  }

  delete(id: number) {
    console.log(id)
    this.blogAdminService.delete(id).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl['../usermng']
    },error => (console.log(error)))

  }
}
