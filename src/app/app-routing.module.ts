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
import {ProfileComponent} from "./profile-user/profile/profile.component";
import {config} from "./ConfigRoles";
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
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.user}
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
    path: 'admin/categories',
    component: CategoryListComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.admin}
  },
  {
    path: 'admin/categories/create',
    component: CategoryCreateComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.admin}
  },
  {
    path: 'admin/categories/:id',
    component: CategoryUpdateComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.admin}
  },
  {
    path: 'admin/profile',
    component: UserListComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.admin}
  },
  {
    path: 'admin/profile/:id',
    component: UserInfoComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.admin}
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path : "logout",
    component : LogoutComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.user}
  },
  {
    path : "home",
    component : HomeComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.user}
  },
  {
    path: 'admin/blogs',
    component:  BlogListComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.admin}
  },
  {
    path: 'admin/profile',
    component: UserListComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.admin}
  },
  {
    path : "usermng",
    component : MainNavUserComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.user}
  },
  {
    path: 'updateblog/:id',
    component: UpdateBlogComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.user}
  },
  {
    path: 'reclaim/:token',
    component: ReclaimComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.user}
  },

  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate : [AuthGuard],
    data : {roles : config.authRoles.user}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
