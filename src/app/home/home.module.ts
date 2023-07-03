import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { NewsModule } from '../news/news.module';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { SharedModule } from '../shared/shared.module';
import { FirebaseModule } from '../firebase/firebase.module';


@NgModule({
  declarations: [
    ArticlesComponent,
    HomeComponent,
    FilterComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NewsModule,
    SharedModule,
    FirebaseModule
  ],
  exports: [
    ArticlesComponent,
    HomeComponent,
    FilterComponent,
    SortComponent
  ]
})
export class HomeModule { }
