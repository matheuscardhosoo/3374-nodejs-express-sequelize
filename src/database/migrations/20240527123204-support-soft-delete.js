'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('pessoas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null
    });
    await queryInterface.addColumn('categorias', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null
    });
    await queryInterface.addColumn('cursos', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null
    });
    await queryInterface.addColumn('matriculas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: null
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('pessoas', 'deletedAt');
    await queryInterface.removeColumn('categorias', 'deletedAt');
    await queryInterface.removeColumn('cursos', 'deletedAt');
    await queryInterface.removeColumn('matriculas', 'deletedAt');
  }
};
