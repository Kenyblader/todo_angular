import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { TASK_STATUS } from "./task";

export default class Subtask extends Model{
    private id!:number;
    private name!:string;
    private startDate!:Date;
    private endDate!:Date;
    private reelEndDate?:Date;
    private status!:TASK_STATUS;
    private idTask!:number
}

Subtask.init({
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
        allowNull:true,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{sequelize,modelName:'Subtask'});
