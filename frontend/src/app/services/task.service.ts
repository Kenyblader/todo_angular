import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/tasks'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

   // Méthode pour mapper les objets JSON en instances de Task
   private mapToTask(data: any): Task {
    return new Task(
      data.name,
      new Date(data.startDate),
      new Date(data.endDate),
      data.status,
      data.idProject,
      data.id,
      data.reelEndDate ? new Date(data.reelEndDate) : undefined,
      data.idUser
    );
  }

  // Ajouter une tâche
  addTask(task: Task): Observable<Task> {
    console.log(task)
    return this.http.post<any>(this.apiUrl, task).pipe(
      map((data) => this.mapToTask(data))
    );
  }

  // Récupérer toutes les tâches
  getAllTasks(): Observable<Task[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
        map((data) => data.map((item) => this.mapToTask(item)))
      );
  }

  // Récupérer une tâche par ID
  getTaskById(id: number): Observable<Task> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map((data) => this.mapToTask(data))
    );
  }

  // Récupérer les tâches d'un projet spécifique
  getTasksByProject(idProject: number): Observable<Task[]> {
    return this.http.get<any[]>(`${this.apiUrl}/project/${idProject}`).pipe(map((data) => data.map((item: any) => this.mapToTask(item))));
  }

  // Mettre à jour une tâche
  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, task).pipe(
      map((data) => this.mapToTask(data))
    );
  }

  // Supprimer une tâche
  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}