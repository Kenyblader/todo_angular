const { User, Task, Project, Category } = require('../models');
async function seed() {
  // Créer un utilisateur
  const user = await User.create({
    email: 'test@example.com',
    password: 'password123',
  });

  // Créer une catégorie
  const category = await Category.create({
    name: 'Travail',
  });

  // Créer une tâche
  await Task.create({
    title: 'Faire le backend',
    description: 'Implémenter les routes API',
    completed: false,
    userId: user.id,
    categoryId: category.id,
  });

  console.log('Données de test ajoutées avec succès.');
}

seed();