import { Request, Response } from 'express';
import User from '../models/user';
import { error } from 'console';

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
        const {id}=await req.body;
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

export const updateUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const {mail,password } = req.body;
      const [updated] = await User.update({ mail, password }, { where: { id } });
  
      if (updated) {
        const updatedTodo = await User.findByPk(id);
        res.json(updatedTodo);
      } else {
        res.status(404).json({ error: "User non trouvé" });
      }
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  };