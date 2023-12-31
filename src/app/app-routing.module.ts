import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)}, {path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)}, {path: '', loadChildren: () => import('./savednews/savednews.module').then((m) => m.SavednewsModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
