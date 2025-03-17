import { query, Request, Response } from "express";
import Gemini from "../models/gemini";
import { error } from "console";

export const getGeminiEmploisDeTemps=async (req:Request,res:Response)=>{
    const {tasks}=req.body;
    const query = `peut tu me donner une suggestion sur comment m'organiser sur la gestion de mes taches les ressoures necessaire et la duree de chaque tache que voici ${JSON.stringify(tasks)}  `;
    let ia=new Gemini();
    let model=await ia.model;
    model.generateContent(query).then(result=>{
        res.json({res:result.response.text()})
    })
    .catch(e=>{
        res.status(500).json({error:e.message})
    });
}

export const getGeminiSuggestfromTask=async (req:Request,res:Response)=>{
    const {task}=req.body;
    let ia=new Gemini();
    let model=await ia.model;
    const query = `peut tu me donner une suggestion sur comment m'organiser pour la realisation de ma tache et les ressources necessaire pour y parvenir ${JSON.stringify(task)}  `;
    const result = await model.generateContent(query)
    .then(result=>{
        res.json({res:result.response.text()})
    })
    .catch(e=>{
        res.status(500).json({error:e.message})
    });
}