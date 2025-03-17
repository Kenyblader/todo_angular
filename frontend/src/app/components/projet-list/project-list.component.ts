import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import  {Project}  from '../../models/project';
import { Task } from '../../models/task.model';
import { ProjectFormComponent } from "../projet_form/project-form.component";
import { TaskFormComponent } from "../task_form/task-form.component";
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  imports: [CommonModule,RouterModule]
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  tasks:{idP:number,task:Task}[]=[];
  private idUser:number=0;

  constructor(private router:ActivatedRoute,private projectService: ProjectService,private taskService:TaskService) {}

  async ngOnInit() {
    await this.loadProject()
  }

  async loadProject(){
    this.idUser=Number(this.router.snapshot.paramMap.get('user'))
    console.log(`user:${this.idUser}`)
    this.projectService.getAllProjects().subscribe({
      next:(response)=>{
        this.projects=response;
        console.log(this.projects)
        this.projects.forEach(p=>{
          this.taskService.getTasksByProject(p.id as number).subscribe({
            next:tasks=>{
              console.log(tasks)
              tasks.forEach((t)=>{
                this.tasks.push({idP:p.id,task:t})
              })
            },
            error:e=>{
              console.error(e)
            }
          })
        })
      },
      error:(e: any)=>{console.error(e)}
    })
  }

  addProject() {
    const name=prompt('entrer le nom du projet: ');
    if(!name)
      return;
    this.projectService.addProject(new Project(name,this.idUser)).subscribe({
      next:p=>{
          this.loadProject()
      },
      error:e=>{
        console.error(e)
      }
    });
  }

  editProject(project: Project) {
    const newName = prompt('Nouveau nom', project.name);
    if (newName) {
      this.projectService.updateProject(project.id as number,{ ...project, name: newName }).subscribe({
        next:(updat: any)=>{
          this.loadProject()
        },
        error: (e: any)=>{console.error(e);}
      })
    }
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe({
      next:()=>{
        this.loadProject()
      },
      error:(e: any)=>{console.error(e)}
    });
  }

  addTask(task: Task, projectId: number) {
    // this.projectService.addTask(projectId, task);
  }
}
