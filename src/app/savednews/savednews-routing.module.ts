import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedpostsComponent } from './savedposts/savedposts.component';

const routes: Routes = [{path: 'saved-posts', component: SavedpostsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavednewsRoutingModule { }
