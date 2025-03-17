import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/database";
import Task from "./task";
import User from "./user";


export default class Project extends Model{
    private id!:number;
    private name!:string;
    private idCreator!:string;

    readonly users?:User[] 
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

const UserProject = sequelize.define('UserProject', {
    // Exemple de champ supplémentaire
    dateJoined: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue:DataTypes.NOW
    }
  });

