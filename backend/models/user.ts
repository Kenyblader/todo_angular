;import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Project from "./projet";
import Task from "./task";

export default class User extends Model{
    private mail!:string;
    private password!:string;
    private id!:number;
    
}

User.init({
    mail:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
},{sequelize,modelName:'User'});

User.hasMany(Project,{
    foreignKey:'idCreator',
    as:'projets'
});
User.hasMany(Task,{
    foreignKey:'idUser',
    as:'taskUser'
})
User.belongsToMany(Project,{
    through:'userProject',
    as :'userP',
    foreignKey:'idUser'
})
Project.belongsToMany(User,{
    through:'userProject',
    as :'projectU',
    foreignKey:'idProject'
})
Task.belongsTo(User,{
    foreignKey:'idUser',
    as:'userTask'
})
Project.belongsTo(User,{
    foreignKey:'idCreator',
    as: 'users'
})