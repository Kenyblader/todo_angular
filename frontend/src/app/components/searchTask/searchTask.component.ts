import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports:[CommonModule,FormsModule,RouterModule],
  templateUrl: './searchTask.component.html',
  styleUrls: ['./searchTask.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filterType: string = 'name';
  filterValue: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  onSearch(): void {
    this.filteredTasks = this.tasks.filter(task => {
      if (this.filterType === 'name') {
        return task.name.toLowerCase().includes(this.filterValue.toLowerCase());
      }
      if (this.filterType === 'dateDebut') {
        return task.startDate === new Date(this.filterValue);
      }
      if (this.filterType === 'statut') {
        return task.status.toLowerCase() === this.filterValue.toLowerCase();
      }
      return true;
    });
  }

  deleteTask(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  openSuggestionPanel(): void {
    // Ici, tu pourrais ajouter la logique pour afficher les suggestions IA
    alert('Suggestions IA activées !');
  }

  editTask(task:Task):void{
    const newName=prompt('entrer le nouveau nom de cette tache',task.name);
    if(!newName)
        return;
    task.name=newName;
    this.taskService.updateTask(task.id,task).subscribe({
        next:u=>{
            this.loadTasks();
        },
        error:e=>{
            console.error(e)
        }
    })
  }
}
