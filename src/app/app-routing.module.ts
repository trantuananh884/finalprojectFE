import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import {IndexComponent} from './index/index.component';
import {LogoutComponent} from "./logout/logout.component";
import {AuthGuard} from "./service/auth.guard";
import {HomeComponent} from './home/home.component';
import {MainNavUserComponent} from './main-nav-user/main-nav-user.component';
import {CategoryListComponent} from "./admin/category/category-list/category-list.component";
import {CategoryCreateComponent} from "./admin/category/category-create/category-create.component";
import {CategoryUpdateComponent} from "./admin/category/category-update/category-update.component";
import {UserListComponent} from "./admin/user/user-list/user-list.component";
import {UserInfoComponent} from "./admin/user/user-info/user-info.component";
import {BlogListComponent} from "./admin/blog/blog-list/blog-list.component";
import {ReclaimComponent} from "./reclaim/reclaim.component";
import {UpdateBlogComponent} from './update-blog/update-blog.component';
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
    component: PostpageComponent,
    canActivate : [AuthGuard]
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
    path:"register",
    component:RegisterComponent
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
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'categories/:id',
    component: CategoryUpdateComponent
  },
  {
    path: 'profile',
    component: UserListComponent
  },
  {
    path: 'profile/:id',
    component: UserInfoComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path : "logout",
    component : LogoutComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path: 'admin/blogs',
    component:  BlogListComponent
  },
  {
    path: 'admin/profile',
    component: UserListComponent
  },
  {
    path : "usermng",
    component : MainNavUserComponent
  },
  {
    path: 'updateblog/:id',
    component: UpdateBlogComponent
  },
  {
    path: 'reclaim/:token',
    component: ReclaimComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
