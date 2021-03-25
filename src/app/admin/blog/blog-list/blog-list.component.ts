import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminBlogService} from "../../../service/admin/admin-blog.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Blog} from "../../../model/in/Blog";
import {throwError} from "rxjs";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[];
  blogShow: any;

  displayedColumns: string[] = ['id', 'title', 'shortDescription', 'createdAt', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminBlogService: AdminBlogService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.adminBlogService.getAll().subscribe( value => {
      this.blogs = value.data;
      console.log(this.blogs)
      // @ts-ignore
      this.blogShow = new MatTableModule(this.blogs);
      this.blogShow.paginator = this.paginator;
      this.blogShow.sort = this.sort;
    }, error => {
      console.log(error);
    })
  }

  clickMethod(id: number) {
    if (confirm('Are you sure to delete Blog?')) {
      this.adminBlogService.delete(id).subscribe();
      alert('Deleted successfully!');
    }
    this.getAll();
  }



}
