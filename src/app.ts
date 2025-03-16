import express from 'express';
import { sequelize } from './config/database';
import taskRoutes from './routes/taskroutes';
import projectRoutes from './routes/projectroutes';
import userRoutes from './routes/userRoutes';
// ...
app.use('/api/users', userRoutes);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);

// Synchronisation avec la base de données
sequelize.sync({ force: true }).then(() => {
  console.log('Base de données synchronisée');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});