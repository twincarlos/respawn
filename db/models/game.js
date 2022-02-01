'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    userId: { allowNull: false, type: DataTypes.INTEGER, references: { model: 'Users' } },
    name: { allowNull: false, type: DataTypes.STRING, unique: true },
    description: { allowNull: false, type: DataTypes.TEXT },
    overallRating: { allowNull: false, type: DataTypes.NUMERIC },
    image: { allowNull: false, type: DataTypes.STRING }
  }, {});
  Game.associate = function(models) {
    const join = {
      through: 'Gameshelf_Detail',
      foreignKey: 'gameId',
      otherKey: 'gameshelfId'
    }
    Game.belongsTo(models.User, { foreignKey: 'userId' });
    Game.belongsToMany(models.Gameshelf, join);
  };
  return Game;
};
