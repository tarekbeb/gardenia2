'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {timestamps: false,
    freezeTableName: true});
  user.associate = function(models) {
  };
  return user;
};