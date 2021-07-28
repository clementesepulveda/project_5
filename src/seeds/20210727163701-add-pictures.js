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
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445519/IMG_3526_fthwrs.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445536/IMG_3570_sseay3.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445542/IMG_4510_iwn7uw.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445553/IMG_4796_epy1xa.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445554/IMG_4801_bchqmu.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445659/IMG_9023_livv8w.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445710/IMG_9058_zaysgu.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445733/IMG_9078_npksvv.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445741/IMG_9085_rygsdi.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    picturesArray.push({
      URL: 'https://res.cloudinary.com/clegowi/image/upload/v1627445755/IMG_9201_madwzn.jpg',
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
