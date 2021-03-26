import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TexteditorComponent} from './texteditor/texteditor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {PostpageComponent} from './postpage/postpage.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatChipsModule} from '@angular/material/chips';
import {DisplayBlogComponent} from './display-blog/display-blog.component';
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from './register/register.component';
import {JwtModule} from "@auth0/angular-jwt";
import {TestComponent} from './test/test.component';
import {FirebaseUploadComponent} from './firebase-upload/firebase-upload.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/storage";
import {RouterModule} from '@angular/router';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

// import {ForbiddenComponent} from './forbidden/forbidden.component';
// import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';
// import {InterceptorService} from "./service/interceptor.service";
import { TagDisplayComponent } from './tag-display/tag-display.component';
import { AdminBlogDisplayComponent } from './admin-blog-display/admin-blog-display.component';
import {MatCardModule} from '@angular/material/card';
import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {InterceptorService} from './service/interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ThumbnailDisplayComponent } from './thumbnail-display/thumbnail-display.component';
import { ThumbNailDisplayRightComponent } from './thumb-nail-display-right/thumb-nail-display-right.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
// import { UserInforComponent } from './user/user-infor/user-infor.component';
import {Nosani} from './nosani';

// import { LikeComponent } from './like/like.component';
import {LikeComponent} from './like/like.component';
import {AuthGuard} from "./service/auth.guard";
import { ShareGmailComponent } from './share-gmail/share-gmail.component';
import {CategoryListComponent} from "./admin/category/category-list/category-list.component";
import {CategoryCreateComponent} from "./admin/category/category-create/category-create.component";
import {CategoryUpdateComponent} from "./admin/category/category-update/category-update.component";
import {UserListComponent} from "./admin/user/user-list/user-list.component";
import {UserInfoComponent} from "./admin/user/user-info/user-info.component";
import {BlogListComponent} from "./admin/blog/blog-list/blog-list.component";
import { MainNavUserComponent } from './main-nav-user/main-nav-user.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import {ReclaimComponent} from "./reclaim/reclaim.component";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ProfileComponent} from "./profile-user/profile/profile.component";
import { CommentComponent } from './comment/comment.component';

// import {TestChuyenTrangComponent} from './test-chuyen-trang/test-chuyen-trang.component';


@NgModule({
  declarations: [
Nosani,
    AppComponent,
    TexteditorComponent,
    MainNavComponent,
    ToolbarComponent,
    PostpageComponent,
    DisplayBlogComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    FirebaseUploadComponent,
    TagDisplayComponent,
    AdminBlogDisplayComponent,
    // TestChuyenTrangComponent,
    ForbiddenComponent,
    ErrorNotFoundComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    UserListComponent,
    UserInfoComponent,
    LogoutComponent,
    BlogListComponent,
    ThumbnailDisplayComponent,
    ThumbNailDisplayRightComponent,
    HomeComponent,
    IndexComponent,
    LikeComponent,
    ShareGmailComponent,
    MainNavUserComponent,
    Nosani,
    UpdateBlogComponent,
    ReclaimComponent,
    ProfileComponent,
    CommentComponent
  ],
  imports: [
    MatChipsModule,
    EditorModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonToggleModule
  ],
  providers: [InterceptorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
