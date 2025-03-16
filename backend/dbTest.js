// Importation de Sequelize
const { Sequelize } = require('sequelize');

// Configuration de la connexion à SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Chemin vers le fichier SQLite
});

// Tester la connexion
sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion à la base de données SQLite réussie.');
  })
  .catch((err) => {
    console.error('Impossible de se connecter à la base de données:', err);
  });