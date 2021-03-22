import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Tag} from '../model/tag';
import {Blog} from '../model/blog';



@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.css']
})
export class PostpageComponent implements OnInit {
  blog:Blog;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [
    {name: 'Blog'},
    {name: 'BlogHub'},

  ];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      console.log(this.tags)
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
