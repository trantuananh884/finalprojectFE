import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TexteditorComponent} from './texteditor/texteditor.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {PostpageComponent} from './postpage/postpage.component';

const routes: Routes = [
  {path:'text',
    component:TexteditorComponent},
  {path:'admin',
    component:MainNavComponent},
  {path:'bar',
    component:ToolbarComponent},
  {path:'titlebar',
    component:PostpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
