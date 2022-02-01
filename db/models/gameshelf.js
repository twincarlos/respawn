'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gameshelf = sequelize.define('Gameshelf', {
    name: { allowNull: false, type: DataTypes.STRING },
    userId: { allowNull: false, type: DataTypes.INTEGER,  references: { model: 'Users' } }
  }, {});
  Gameshelf.associate = function(models) {
    const join = {
      through: 'Gameshelf_Detail',
      foreignKey: 'gameshelfId',
      otherKey: 'gameId'
    }
    Gameshelf.belongsToMany(models.Game, join);
    Gameshelf.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Gameshelf;
};
