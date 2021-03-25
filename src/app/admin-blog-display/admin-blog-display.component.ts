import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Blog} from '../model/in/Blog';

@Component({
  selector: 'app-admin-blog-display',
  templateUrl: './admin-blog-display.component.html',
  styleUrls: ['./admin-blog-display.component.css']
})
export class AdminBlogDisplayComponent implements OnInit {
@Input() blog?:Blog
  style?: string;
  constructor() { }

  ngOnInit(): void {
    this.style = "background-image: url(" + this.blog.previewImageURl +")";
  }

}
