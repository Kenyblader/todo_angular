import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Task from "./task";


export default class Project extends Model{
    private id!:number;
    private name!:string;
    private idCreator!:string;
}

Project.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{sequelize,modelName:'Projets'})

Project.hasMany(Task,{
    foreignKey:'idProject',
    as:'projectTask'
});

Task.belongsTo(Project,{
    foreignKey:'idProject',
    as:'taskProject'
})

