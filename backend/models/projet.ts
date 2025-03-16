import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";


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

