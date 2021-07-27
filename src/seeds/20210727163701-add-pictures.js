'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const picturesArray = []
    
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627403315/IMG_4804_adgids.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627407627/IMG_6514_m2apkt.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('pictures', picturesArray);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
