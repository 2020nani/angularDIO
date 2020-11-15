import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseInfoComponent } from './courses/course-info.component';
import { CourselistComponent } from './courses/course-list.component';
import { Erro404Component } from './erro404/erro404.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CourselistComponent
  },
  {
    path: 'courses/info/:id',
    component: CourseInfoComponent
  },
  //se nao achar rota redireciona
  {
  path: '**',
  component: Erro404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
