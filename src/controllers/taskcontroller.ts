import { Request, Response } from 'express';
import Task from '../models/task';
import { generateTaskAdvice, estimateTaskDuration } from '../services/geminiservice';

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.findAll({ where: { completed: false } });
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, category } = req.body;
  const estimatedTime = await estimateTaskDuration(title); // Appel à Gemini
  const task = await Task.create({ title, category, estimatedTime });
  res.json(task);
};

export const completeTask = async (req: Request, res: Response) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    task.completed = true;
    await task.save();
    res.json(task);
  } else {
    res.status(404).json({ message: 'Tâche non trouvée' });
  }
};