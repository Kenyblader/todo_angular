'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false, // Ajouté pour garantir que le titre est obligatoire
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true, // La description peut être optionnelle
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, // Par défaut, une tâche n'est pas complétée
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false, // Une tâche doit être associée à un utilisateur
        references: {
          model: 'Users', // Référence à la table Users
          key: 'id', // Référence à la colonne id de la table Users
        },
        onUpdate: 'CASCADE', // Si l'id de l'utilisateur est mis à jour, mettez à jour cette clé étrangère
        onDelete: 'CASCADE', // Si l'utilisateur est supprimé, supprimez toutes ses tâches
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true, // Une tâche peut ne pas avoir de catégorie
        references: {
          model: 'Categories', // Référence à la table Categories
          key: 'id', // Référence à la colonne id de la table Categories
        },
        onUpdate: 'CASCADE', // Si l'id de la catégorie est mis à jour, mettez à jour cette clé étrangère
        onDelete: 'SET NULL', // Si la catégorie est supprimée, définissez categoryId à NULL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  },
};