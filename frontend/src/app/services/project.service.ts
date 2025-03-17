import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {Project}  from '../models/project';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/api/projects'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Ajouter un projet
  addProject(project: Project): Observable<Project> {
    console.log(Project)
    return this.http.post<Project>(this.apiUrl, project);
  }

  // Récupérer tous les projets
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  // Récupérer un projet par ID
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  getProjectByUser(id:number):Observable<Project[]>{
    return this.http.get<Project[]>(`${this.apiUrl}/user/${id}`);
  }

  // Mettre à jour un projet
  updateProject(id: number, Project: Project): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, Project);
  }

  // Supprimer un projet
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

// export class ProjectService {
//   private Projects: Project[] = [
//     { id: 1, name: 'Projet 1', description: 'Description du projet 1', tasks: [] },
//     { id: 2, name: 'Projet 2', description: 'Description du projet 2', tasks: [] }
//   ];

//   getProjects(): Project[] {
//     return this.Projects;
//   }

//   addProject(Project: Project) {
//     this.Projects.push({ ...Project, id: this.Projects.length + 1, tasks: [] });
//   }

//   updateProject(updatedProject: Project) {
//     const index = this.Projects.findIndex(p => p.id === updatedProject.id);
//     if (index !== -1) {
//       this.Projects[index] = updatedProject;
//     }
//   }

//   deleteProject(id: number) {
//     this.Projects = this.Projects.filter(p => p.id !== id);
//   }

//   addTask(ProjectId: number, task: Task) {
//     const Project = this.Projects.find(p => p.id === ProjectId);
//     if (Project) {
//       Project.tasks.push({ ...task, id: Project.tasks.length + 1 });
//     }
//   }
// }
