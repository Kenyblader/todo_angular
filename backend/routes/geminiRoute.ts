import { Router } from "express";
import { getGeminiEmploisDeTemps, getGeminiSuggestfromTask } from "../controllers/geminiController";
import { get } from "http";

const geminiRoute=Router();

geminiRoute.get('/gemini/tasks',getGeminiEmploisDeTemps);
geminiRoute.get('/gemini/task',getGeminiSuggestfromTask);

export default geminiRoute;