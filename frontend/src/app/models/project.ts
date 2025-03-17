import { Task } from "./task.model";

export interface IProject {
  id?: number;
  name: string;
  idCreator: number; // Modifiez le type en fonction de votre modèle de données
}

export  class Project implements IProject{
  id: number ;
  name: string;
  idCreator: number;


  constructor(name:string,idCreator:number,id?:number){
    this.id=id??0
    this.name=name;
    this.idCreator=idCreator
  }

}


