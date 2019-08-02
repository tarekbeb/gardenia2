'use strict';
module.exports = (sequelize, DataTypes) => {
  const wishlist = sequelize.define('wishlist', {
    plant_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {timestamps: false,
    freezeTableName: true});
  wishlist.associate = function(models) {
    models.wishlist.belongsTo(models.user, {foreignKey: 'user_id'})
  };
  return wishlist;
};