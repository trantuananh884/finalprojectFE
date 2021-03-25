import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-main-nav-admin',
  templateUrl: './main-nav-admin.component.html',
  styleUrls: ['./main-nav-admin.component.css']
})
export class MainNavAdminComponent implements OnInit {

  showProfile: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {
  }
  ngOnInit(): void {
  }

  setShowProfile() {
    this.showProfile = true;
  }


}
