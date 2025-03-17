import { Component, EventEmitter, Output } from '@angular/core';
import  {Project}  from '../../models/project';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-form',
  imports:[FormsModule],
  templateUrl: './project-form.component.html',
  styleUrls: []
})
export class ProjectFormComponent {
   name= '';
  @Output() projectAdded = new EventEmitter<Project>();

  constructor(private projectService:ProjectService){}

  onSubmit() {
    // this.projectAdded.emit({idCreator:1,name:this.name});
    // this.projectService.addProject(this.projectAdded)
    // this. name= '';
  }
}
