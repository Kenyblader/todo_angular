 interface ITask {
  id?: number; // L'id est optionnel lors de la création d'une tâche
  name: string;
  startDate: Date;
  endDate: Date;
  status: string;
  idProject: number;
  img?: string;
  reelEndDate?: Date;
  idUser?: number;
}

export class Task implements ITask{
  id: number ;
  name: string;
  startDate: Date;
  endDate: Date;
  status: string;
  idProject: number;
  img?: string ;
  reelEndDate?: Date ;
  idUser?: number ;

  constructor(name:string,startDate:Date,endDate:Date,status:string,idProject:number,id?:number,reelEndDate?:Date,idUser?:number){
    this.id=id??0;
    this.name=name;
    this.startDate=startDate;
    this.endDate=endDate;
    this.idProject=idProject;
    this.reelEndDate=reelEndDate;
    this.status=status;
  }
  
}
