import { Request, Response } from "express";
import Task from "../models/task";
import { error } from "console";
import Subtask from "../models/subtask";

export const addSubtask=async(req:Request,res:Response)=>{
    try {
        const {name,startDate,endDate,status,idTask,}=req.body;
        const subtask=await Subtask.create({name,startDate,endDate,status,idTask});
        res.json(subtask)
    } catch (error:any) {
        res.status(500).json({error:error.message})
   }
}

export const getAllSubtask=async(req:Request,res:Response)=>{
    try {
        const subtasks=await Subtask.findAll()
        res.json(subtasks)
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

export const getSubtaskById=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const subtask=await Subtask.findByPk(id);
        if(!subtask)
            res.status(404).json({error:`subtask ${id} not found`})
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

export const getSubtaskByTask=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const subtasks=await Subtask.findAll({where:{idTask:id}});
    } catch (error:any) {
        
    }
}

export const updateSubtask=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const {name,startDate,endDate,status,idProject,reelEndDate}=req.body;
        const updated=await Subtask.update({name,startDate,endDate,status,idProject,reelEndDate},{where:{id}});
        res.json(updated)
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}
export const deleteSubtask=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const del=await Subtask.destroy({where:{id}})
        if(del>0)
            res.json({isOk:true})
        else
            res.status(404).json({error:`erreur delete subtask ${id}`})
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}