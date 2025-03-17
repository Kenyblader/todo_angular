import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  imports:[FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['task-form.css']
})
export class TaskFormComponent {
  @Input() projectId!: number;
  name: string='';
  startDate: string='';
  endDate: string='';
  status: string='';
  @Output() taskAdded = new EventEmitter<Task>();
constructor(private taskservice:TaskService,private route:ActivatedRoute){

}
ngOnint():void{
    this.projectId=Number(this.route.snapshot.paramMap.get('id'));
}
  onSubmit() {
    console.log(this.startDate)
    console.log(this.endDate)
     const task=new Task(
      this.name,new Date(this.startDate),
      new Date(this.endDate),
      this.status,
      this.projectId
    )

    this.taskservice.addTask(task).subscribe({
      next:t=>{alert('tacher enregistrer')},
      error:e=>{console.error(e)}
    })


    this.name='';
    this.startDate='';
    this.endDate='';
    this.status='';
  }
}
