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
import {CategoryListComponent} from "./admin/category/category-list/category-list.component";
import {CategoryCreateComponent} from "./admin/category/category-create/category-create.component";
import {CategoryUpdateComponent} from "./admin/category/category-update/category-update.component";
import {UserListComponent} from "./admin/user/user-list/user-list.component";
import {UserInfoComponent} from "./admin/user/user-info/user-info.component";
import {IndexComponent} from './index/index.component';
import {BlogListComponent} from "./admin/blog/blog-list/blog-list.component";
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
    path: 'blogs/:id',
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
    path: 'admin/categories',
    component: CategoryListComponent
  },
  {
    path: 'admin/categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'admin/categories/:id',
    component: CategoryUpdateComponent
  },
  {
    path: 'admin/profile',
    component: UserListComponent
  },
  {
    path: 'admin/profile/:id',
    component: UserInfoComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'admin/blogs',
    component: BlogListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
