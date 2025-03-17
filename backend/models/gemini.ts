import { GenerativeModel, GoogleGenerativeAI }  from "@google/generative-ai";
import Task from "./task";
import dotenv from 'dotenv'

dotenv.config()
export default class Gemini{
    private _model!: GenerativeModel;
    constructor(){
        
    }

    get model(){
        let api_key=process.env.API_KEY_GEMINI as string;
        const genAI = new GoogleGenerativeAI(api_key);
        this._model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        return this._model
    }
}