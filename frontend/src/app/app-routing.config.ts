import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/projet-list/project-list.component';
import { TaskFormComponent } from './components/task_form/task-form.component';
import { TaskListComponent } from './components/searchTask/searchTask.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'projects/:user', component: ProjectListComponent },
  {path:'projects/:user/searchtask/:id/formtask',component:TaskFormComponent},
  {path:'projects/:user/searchtask/:id',component:TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
