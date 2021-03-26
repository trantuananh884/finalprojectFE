import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminBlogService} from "../../../service/admin/admin-blog.service";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Blog} from "../../../model/in/Blog";
import {throwError} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: any;

  displayedColumns: string[] = ['id', 'title', 'shortDescription', 'createdAt', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminBlogService: AdminBlogService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.adminBlogService.getAll().subscribe(value => {
      this.blogs = value;
      console.log(this.blogs)
      // @ts-ignore
      this.blogs = new MatTableDataSource(this.blogs.data);
      this.blogs.paginator = this.paginator;
      this.blogs.sort = this.sort;
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
