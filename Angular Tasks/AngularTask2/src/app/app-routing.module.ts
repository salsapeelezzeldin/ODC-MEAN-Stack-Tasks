import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';

const routes: Routes = [
  {path:'' , component: IndexComponent},
  {path:'projects' , component: ProjectsComponent},
  {path:'projects/:projectId' , component: SingleProjectComponent },
  {path:"**" , component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
