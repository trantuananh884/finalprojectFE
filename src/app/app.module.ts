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
// import { ToolbarComponent } from './toolbar/toolbar.component';
import {PostpageComponent} from './postpage/postpage.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatChipsModule} from '@angular/material/chips';
import { CategoryListComponent } from './category-list/category-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CategoryUpdateComponent } from './category-update/category-update.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryCreateComponent } from './category-create/category-create.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TexteditorComponent,
    MainNavComponent,
    ToolbarComponent,
    PostpageComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    CategoryCreateComponent,
    UserListComponent,
  ],
  imports: [
    MatChipsModule,
    HttpClientModule,
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
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
