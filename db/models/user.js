'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { allowNull: false, type: DataTypes.STRING(50), unique: true },
    hashedPassword: { allowNull: false, type: DataTypes.STRING.BINARY },
    profile: { allowNull: false, type: DataTypes.STRING }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Game, { foreignKey: 'userId' });
    User.hasMany(models.Gameshelf, { foreignKey: 'userId' });
  };
  return User;
};
