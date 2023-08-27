'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', { 
      id_user: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: true
      },
      email_user: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true
      },
      name_user: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password_user: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
     
  },

  down (queryInterface, Sequelize) {
     return queryInterface.dropTable('users');
     
  }
};
