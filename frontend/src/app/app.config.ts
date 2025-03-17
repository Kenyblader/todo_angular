import { ApplicationConfig, importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.config';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/projet-list/project-list.component';
import { ProjectFormComponent } from './components/projet_form/project-form.component';
import { TaskFormComponent } from './components/task_form/task-form.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     ProjectListComponent,
//     ProjectFormComponent,
//     TaskFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, AppRoutingModule,HttpClient), // Importez les modules nécessaires
    provideRouter([]), // Ajoutez vos routes ici si elles ne sont pas définies dans AppRoutingModule
    provideHttpClient() // Si vous utilisez HttpClient
  ]
};
