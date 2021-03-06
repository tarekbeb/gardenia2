'use strict';
module.exports = (sequelize, DataTypes) => {
  const plant_collection = sequelize.define('plant_collection', {
    user_id: DataTypes.INTEGER,
    plant_id: DataTypes.INTEGER,
    plant_name: DataTypes.STRING,
    moisture: DataTypes.STRING,
    temperature_range: DataTypes.STRING,
    shade_tolerance: DataTypes.STRING,
    image_url: DataTypes.STRING,
    in_wishlist: DataTypes.BOOLEAN,
    in_collection: DataTypes.BOOLEAN
  }, {
    timestamps: false,
    freezeTableName: true
  });
  plant_collection.associate = function(models) {
    models.plant_collection.belongsTo(models.user, {foreignKey: 'user_id'})
  };
  return plant_collection;
};