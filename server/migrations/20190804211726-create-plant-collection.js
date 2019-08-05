'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plant_collection', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'user'
          }
        }
      },
      plant_name: {
        type: Sequelize.STRING
      },
      plant_id: {
        type: Sequelize.INTEGER
      },
      moisture: {
        type: Sequelize.STRING
      },
      temperature_range: {
        type: Sequelize.STRING
      },
      shade_tolerance: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('plant_collection');
  }
};