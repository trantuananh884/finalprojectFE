import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TexteditorComponent} from './texteditor/texteditor.component';
import {MainNavComponent} from './main-nav/main-nav.component';

const routes: Routes = [
  {path:'text',
    component:TexteditorComponent},
  {path:'admin',
    component:MainNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
