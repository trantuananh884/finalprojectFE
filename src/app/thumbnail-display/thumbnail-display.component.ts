import {Component, Input, OnInit} from '@angular/core';
import {Blog} from '../model/in/Blog';

@Component({
  selector: 'app-thumbnail-display',
  templateUrl: './thumbnail-display.component.html',
  styleUrls: ['./thumbnail-display.component.css']
})
export class ThumbnailDisplayComponent implements OnInit {
@Input() blog:Blog ={}
style?:string ="";
  constructor() { }

  ngOnInit(): void {
  this.style = "background-image: url(" + this.blog.previewImageURl +")";

    console.log(this.style);
  }

}
