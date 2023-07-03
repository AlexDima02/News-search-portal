import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavednewsRoutingModule } from './savednews-routing.module';
import { SavedpostsComponent } from './savedposts/savedposts.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { SavedcardsComponent } from './savedcards/savedcards.component';
import { FirebaseModule } from '../firebase/firebase.module';


@NgModule({
  declarations: [
    SavedpostsComponent,
    SavedcardsComponent
  ],
  imports: [
    CommonModule,
    SavednewsRoutingModule,
    SharedModule,
    HomeModule,
    FirebaseModule
  ]
})
export class SavednewsModule { }
