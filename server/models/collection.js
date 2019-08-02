'use strict';
module.exports = (sequelize, DataTypes) => {
  const collection = sequelize.define('collection', {
    plant_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {timestamps: false,
    freezeTableName: true});
  collection.associate = function(models) {
    models.collection.belongsTo(models.user, {foreignKey: 'user_id'})  };
  return collection;
};