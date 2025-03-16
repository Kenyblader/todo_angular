import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import userRouter from './routes/userRoute';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRouter);
(async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('✅ Connexion à SQLite réussie !');
      app.listen(PORT, () => {
        console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('❌ Erreur de connexion à SQLite :', error);
    }
  })();