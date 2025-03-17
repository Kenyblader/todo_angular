import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import userRouter from './routes/userRoute';
import projectRoute from './routes/projectRoute';
import taskRoute from './routes/taskRoute';
import subtaskRoute from './routes/subtaskRoute';
import geminiRoute from './routes/geminiRoute';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRouter);
app.use('/api',projectRoute);
app.use('/api',taskRoute);
app.use('/api',subtaskRoute);
app.use('/api', geminiRoute);

(async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync({force:true});
      console.log('✅ Connexion à SQLite réussie !');
      app.listen(PORT, () => {
        console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('❌ Erreur de connexion à SQLite :', error);
    }
  })();