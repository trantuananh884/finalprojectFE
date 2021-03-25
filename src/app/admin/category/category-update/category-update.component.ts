import {Component, OnInit} from '@angular/core';
import {Category} from "../../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/admin/category.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category;

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });

  constructor(private categoryService: CategoryService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.findCategoryById(id);
    });
  }

  ngOnInit() {
  }

  findCategoryById(id: number) {
    this.categoryService.findById(id).subscribe(category => {
      // @ts-ignore
      this.category = category.data;
      this.categoryForm = new FormGroup({
        name: new FormControl(this.category.name)
      });
    });
  }

  updateCategory(id?: number) {
    let category = this.categoryForm.value;
    console.log(category);
    this.categoryService.updateCategory(id, category).subscribe(() => {
        alert('Update successfully');
      },
      () => alert('Not updated')
    );
  }
}
