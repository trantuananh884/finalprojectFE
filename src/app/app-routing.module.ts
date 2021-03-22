import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TexteditorComponent} from './texteditor/texteditor.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {PostpageComponent} from './postpage/postpage.component';
import {DisplayBlogComponent} from './display-blog/display-blog.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path:'text',
    component:TexteditorComponent},
  {path:'admin',
    component:MainNavComponent},
  {path:'bar',
    component:ToolbarComponent},
  {path:'titlebar',
    component:PostpageComponent},
  {path:'display',
    component:DisplayBlogComponent},
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
