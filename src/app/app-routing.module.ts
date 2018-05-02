import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {path: '', component: HomeComponent, data: {page: 'one'}},
    {path: 'about', component: AboutComponent, data: {page: 'two'}},
    {path: 'work', component: WorkComponent, data: {page: 'three'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingModule = [AboutComponent, WorkComponent, HomeComponent]
