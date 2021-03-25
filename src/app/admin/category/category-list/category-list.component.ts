import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CategoryService} from "../../../service/admin/category.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: any;

  displayedColumns: string[] = ['id', 'name', 'createdAt', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
      this.categories = new MatTableDataSource(this.categories.data);
      this.categories.paginator = this.paginator;
      this.categories.sort = this.sort;
    }, error => {
      console.log(error);
    });
  }

  clickMethod(id: number) {
    if (confirm('Are you sure to delete Employee')) {
      this.categoryService.delete(id).subscribe();
      alert('Deleted successfully!');
    }
    this.getAll();
  }
}
