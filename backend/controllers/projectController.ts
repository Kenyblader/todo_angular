import { Request, Response } from "express";
import Project from "../models/projet";
import { error } from "console";

export const addProject=async(req:Request,res:Response)=>{
    try {
        const{name,idCreator}=await req.body;
        const project=await Project.create({name,idCreator})
        res.json(project)
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
    

}

export const getAllProjects=async(req:Request,res:Response)=>{
    try {
        const projects=await Project.findAll();
        res.json(projects)
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

export const getProjectById=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const project=await Project.findByPk(id);
        if(!project)
            res.status(404).json({error:`project ${id} not found`})
        else
            res.json(project)
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

export const updateProject=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const {name}=req.body;
        const updated=await Project.update({name},{where:{id}});
        res.json(updated)
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

export const deleteProject=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const del= await Project.destroy({where:{id}})
        if(del>0)
            res.json({isOk:true})
        else
            res.status(404).json({error:`delete ${id} echoue`})       
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

