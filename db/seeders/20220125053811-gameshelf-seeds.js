'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Gameshelves', [
        { name: 'Played', userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 6, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 7, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 9, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 10, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Played', userId: 11, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 6, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 7, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 9, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 10, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Want To Play', userId: 11, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 6, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 7, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 9, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 10, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Playing', userId: 11, createdAt: new Date(), updatedAt: new Date() },
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('Gameshelves', null, {});
  }
};
