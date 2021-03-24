import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TexteditorComponent} from './texteditor/texteditor.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {PostpageComponent} from './postpage/postpage.component';
import {DisplayBlogComponent} from './display-blog/display-blog.component';
import {TestComponent} from './test/test.component';
import {FirebaseUploadComponent} from './firebase-upload/firebase-upload.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AdminBlogDisplayComponent} from './admin-blog-display/admin-blog-display.component';
import {LogoutComponent} from "./logout/logout.component";
import {ThumbnailDisplayComponent} from './thumbnail-display/thumbnail-display.component';
import {ThumbNailDisplayRightComponent} from './thumb-nail-display-right/thumb-nail-display-right.component';
import {HomeComponent} from './home/home.component';
import {IndexComponent} from './index/index.component';
// import {TestChuyenTrangComponent} from "./test-chuyen-trang/test-chuyen-trang.component";

const routes: Routes = [
  {
    path: 'text',
    component: TexteditorComponent
  },
  {
    path: 'admin',
    component: MainNavComponent
  },
  {
    path: 'bar',
    component: ToolbarComponent
  },
  {
    path: 'titlebar',
    component: PostpageComponent
  },
  {
    path: 'display',
    component: DisplayBlogComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'firebase',
    component: FirebaseUploadComponent
  },
  // {
  //   path:"profile/:id",
  //   component:TestChuyenTrangComponent
  // },
  {
    path: 'blogadmin',
    component: AdminBlogDisplayComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "thumbnail",
    component: ThumbnailDisplayComponent
  },
  {
    path: "thumbnailright",
    component: ThumbNailDisplayRightComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "index",
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
