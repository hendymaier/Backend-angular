import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ArticlesComponent} from '../app/components/articles/articles.component';
import {AppComponent} from './app.component'

const routes: Routes = [
  {
    path: '',
    component: AppComponent 
  },
  {
    path: 'articles',
    component: ArticlesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
