import { Request, Response } from 'express';
import User from '../models/user';
import { error } from 'console';
import Project from '../models/projet';
import Task from '../../src/models/task';

export const addUser=async(req:Request,res:Response)=>{
    try{
        const {mail,password}=req.body;
        const user= await User.create({mail,password});
        res.json(user)
    }catch(e:any){
        res.status(500).json({error:e.message})
    }

};

export const getAllUsers=async(req:Request,res:Response)=>{
    try{
        const  users=await User.findAll();
        res.json(users)
    }catch(e:any){
        res.status(500).json({error:e.message})
    }
};

export const getUserById=async (req:Request,res:Response)=>{
    try{
        const {id}=await req.params;
        const user=await User.findByPk(id);
        console.log({id},id)
        if(!user)
            res.json({error:'user non trouve'});
        else
            res.json(user)
    }catch(e:any){
        res.status(500).json({error:e.message})
    }
}

export const getUserByEP=async (req:Request,res:Response)=>{
    try{
        const {mail,password}=await req.body;
        const user=await User.findAll({where:{mail,password}});
        if(user.length==0)
            res.json({error:'user non trouve',isLog:false});
        else
            res.json({user:user[0],isLog:true})
    }catch(e:any){
        res.status(500).json({error:e.message,isLog:false})
    }
}

export const getProjectByUser=async (req:Request,res:Response)=>{
    try {
        const {id}=await req.params;
        console.log(id)
        const projects=await Project.findAll({
            where:{idCreator:id}
        })
        
        if(!projects)
            res.status(404).json({error:'user non trouve'})
        else
            res.json(projects)   
            
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getProjectAssociatetoUser=async (req:Request,res:Response)=>{
    try {
        const {idUser}=req.params;
        const task=await Task.findAll({where:{idUser}})
        if(!task)
            res.status(404).json({error:'taches non trouve'})
        else{
            let idsproject:number[]=[];
            (task).forEach(t=>{
                idsproject.push(t.projectId as number)
            })
            idsproject=Array.from(new Set(idsproject));
            let  projects:Project[]=[];
            await idsproject.forEach(async id=>{
                const project=await Project.findByPk(id);
                if(!project)
                    res.status(404).json({error:`project ${id} not found`})
                else
                    projects.push(project)
            });
            res.json(projects)
        }
    } catch (error:any) {
        res.status(500).json({error:error})
    }
    res.json({ok:true})
}

export const updateUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const {mail,password } = req.body;
      const [updated] = await User.update({ mail, password }, { where: { id } });
  
      if (updated) {
        const updatedUser = await User.findByPk(id);
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: "User non trouvé" });
      }
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  };