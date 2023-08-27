'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.createTable('urls', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
      },
      code_url: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true
      },
      original_url: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: true
      },
      clicks: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'active',
        allowNull: true
      },
      user_id:{
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id_user'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
    
  },

   down (queryInterface, _Sequelize) {
     return queryInterface.dropTable('urls');
  }
};
