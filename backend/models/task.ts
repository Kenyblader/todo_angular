import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Subtask from "./subtask";


export enum TASK_STATUS{
    new="A Faire", enCours="En Cours", terminer="Terminer"
}
export default class Task extends Model{
    private id!:number;
    private name!:string;
    private startDate!:Date;
    private endDate!:Date;
    private reelEndDate?:Date;
    private status!:TASK_STATUS;
    private img?:Blob;
    private idUser?:number
}

Task.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }  ,
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    startDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    endDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    reelEndDate:{
        type:DataTypes.DATE,
        allowNull:true
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    img:{
        type:DataTypes.BLOB,
        allowNull:false
    },
},{sequelize,modelName:'Task'});

Task.hasMany(Subtask,{
    foreignKey:'idTask',
    as: 'subtaskTasks'
})


Subtask.belongsTo(Task,{
    foreignKey:'idTask',
    as:'subtaskTasks'
})