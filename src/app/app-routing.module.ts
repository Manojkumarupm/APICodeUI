import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTaskComponent} from './Dashboard/add-task/add-task.component';
import {ViewTaskComponent} from './Dashboard/view-task/view-task.component';
import {UpdateTaskComponent} from './Dashboard/update-task/update-task.component';
import { AddProjectComponent } from './Dashboard/add-project/add-project.component';
import { AddUsersComponent } from './Dashboard/add-users/add-users.component';
const routes: Routes = [
  {path: '', redirectTo: '/view-task' , pathMatch: 'full'},
{path: 'add-task', component: AddTaskComponent},
{path: 'add-project', component: AddProjectComponent},
{path: 'add-users', component: AddUsersComponent},
{path: 'view-task', component: ViewTaskComponent},
{path: 'update-task/:taskid', component: UpdateTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
