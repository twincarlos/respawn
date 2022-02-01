'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Users', [
        { username: 'Demo', hashedPassword: 'Passw0rd!', profile: 'https://image.pngaaa.com/991/593991-middle.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Nintendo', hashedPassword: 'Passw0rd!', profile: 'http://assets.stickpng.com/images/5a1c3678f65d84088faf1403.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Rockstar Games', hashedPassword: 'Passw0rd!', profile: 'https://www.gameshub.com/wp-content/uploads/sites/5/2022/01/1cf72cffd1892fefbad861ce0e1b7c93.jpg', createdAt: new Date(), updatedAt: new Date() },
        { username: 'EA', hashedPassword: 'Passw0rd!', profile: 'https://logos-world.net/wp-content/uploads/2020/08/EA-Emblem.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Activision', hashedPassword: 'Passw0rd!', profile: 'https://e7.pngegg.com/pngimages/457/679/png-clipart-activision-blizzard-video-game-logo-mls-logo-angle-text.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Ubisoft', hashedPassword: 'Passw0rd!', profile: 'https://1000logos.net/wp-content/uploads/2020/07/Ubisoft-Logo-2003.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Sega', hashedPassword: 'Passw0rd!', profile: 'https://1000logos.net/wp-content/uploads/2021/05/Sega-logo.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Naughty Dog', hashedPassword: 'Passw0rd!', profile: 'https://image.pngaaa.com/868/1012868-middle.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Square Enix', hashedPassword: 'Passw0rd!', profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Square_Enix_logo.svg/2560px-Square_Enix_logo.svg.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Capcom', hashedPassword: 'Passw0rd!', profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/5592px-Capcom_logo.svg.png', createdAt: new Date(), updatedAt: new Date() },
        { username: 'Epic Games', hashedPassword: 'Passw0rd!', profile: 'https://brandslogos.com/wp-content/uploads/images/large/epic-games-logo-black-and-white.png', createdAt: new Date(), updatedAt: new Date() }
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
