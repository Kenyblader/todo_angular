import { Request, Response } from "express";
import Task from "../models/task";
import { error } from "console";

export const addTask=async(req:Request,res:Response)=>{
    try {
        const {name,startDate,endDate,status,idProject}=req.body;
        const task=await Task.create({name,startDate,endDate,status,idProject});
        res.json(task)
    } catch (error:any) {
        res.status(500).json({error:error.message})
   }
}

export const getAllTask=async(req:Request,res:Response)=>{
    try {
        const tasks=await Task.findAll()
        res.json(tasks)
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

export const getTaskById=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const task=await Task.findByPk(id);
        if(!task)
            res.status(404).json({error:`task ${id} not found`})
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

export const getTaskByProject=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const tasks=await Task.findAll({where:{idProject:id}});
    } catch (error:any) {
        
    }
}

export const updateTask=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const {name,startDate,endDate,status,idProject,img,reelEndDate,idUser}=req.body;
        const updated=await Task.update({name,startDate,endDate,status,idProject,img,reelEndDate,idUser},{where:{id}});
        res.json(updated)
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}
export const deleteTask=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const del=await Task.destroy({where:{id}})
        if(del>0)
            res.json({isOk:true})
        else
            res.status(404).json({error:`erreur delete task ${id}`})
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}