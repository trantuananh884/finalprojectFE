import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-share-gmail',
  templateUrl: './share-gmail.component.html',
  styleUrls: ['./share-gmail.component.css']
})
export class ShareGmailComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  share() {
    let body = "ProHub share + http://localhost:4200" + this.router.url;
    let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Your+Subject+here&body='+body + '&ui=2&tf=1&pli=1';

    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  }
  shareFacebook(){
    let url = "http://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=title";
    window.open(url, 'fbShareWindow', 'toolbar=0,status=0,width=648,height=395');
  }
}
