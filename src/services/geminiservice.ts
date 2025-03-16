import { GoogleGenerativeAI } from '@google/generative-ai'; // À installer

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const generateTaskAdvice = async (taskTitle: string): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Donne-moi des conseils pour accomplir cette tâche : "${taskTitle}"`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

export const estimateTaskDuration = async (taskTitle: string): Promise<number> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Estime la durée en minutes pour accomplir cette tâche : "${taskTitle}"`;
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return parseInt(text.match(/\d+/)?.[0] || '60'); // Par défaut 60 min
};

export const generateSchedule = async (tasks: string[]): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Crée un planning pour ces tâches : ${tasks.join(', ')}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};