import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Tag} from '../model/tag';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.css']
})
export class TagDisplayComponent implements OnInit {
  @Output() tagArrayEmit = new EventEmitter();
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
      this.tagArrayEmit.emit(this.tags)
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
      console.log(this.tags);
      this.tagArrayEmit.emit(this.tags)
    }
  }
  constructor() {

  }

  ngOnInit(): void {
    this.tagArrayEmit.emit(this.tags)
  }

}
