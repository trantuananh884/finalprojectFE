import {Component, Input, OnInit} from '@angular/core';
import {Blog} from '../model/in/Blog';

@Component({
  selector: 'app-thumb-nail-display-right',
  templateUrl: './thumb-nail-display-right.component.html',
  styleUrls: ['./thumb-nail-display-right.component.css']
})
export class ThumbNailDisplayRightComponent implements OnInit {
  @Input() blog:Blog ={}
  style?:string ="";
  constructor() { }

  ngOnInit(): void {
    this.style = "background-image: url(" + this.blog.previewImageURl +")";

    console.log(this.style);
  }


}
