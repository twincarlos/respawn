'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gameshelf_Detail = sequelize.define('Gameshelf_Detail', {
    gameId: { allowNull: false, type: DataTypes.INTEGER, references: { model: 'Games' } },
    gameshelfId: { allowNull: false, type: DataTypes.INTEGER, references: { model: 'Gameshelves' } }
  }, {});
  Gameshelf_Detail.associate = function(models) {
    
  };
  return Gameshelf_Detail;
};
