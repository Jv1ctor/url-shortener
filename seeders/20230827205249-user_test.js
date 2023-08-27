'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id_user: "teste01",
      email_user:'teste@gmail.com',
      name_user: 'teste',
      password_user: '1234',
      createdAt: new Date()
     }],);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
