import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './Dashboard/add-task/add-task.component';
import { ViewTaskComponent } from './Dashboard/view-task/view-task.component';
import { UpdateTaskComponent } from './Dashboard/update-task/update-task.component';
import { SharedService } from './Services/shared.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';
import { AddProjectComponent } from './Dashboard/add-project/add-project.component';
import { AddUsersComponent } from './Dashboard/add-users/add-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    AddProjectComponent,
    AddUsersComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [SharedService, HttpClientModule, HttpClient, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
