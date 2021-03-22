import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TexteditorComponent} from './texteditor/texteditor.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {PostpageComponent} from './postpage/postpage.component';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryUpdateComponent} from "./category-update/category-update.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {UserListComponent} from "./user-list/user-list.component";

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
    path: 'users',
    component: UserListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
