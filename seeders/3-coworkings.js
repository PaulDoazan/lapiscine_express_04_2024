module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Coworkings', [{
      name: "Good Cowork",
      superficy: 1400,
      capacity: 122,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name: "Anticafé",
      superficy: 95,
      capacity: 45,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Oasis",
      superficy: 200,
      capacity: 27,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name: "WIN Mériadeck",
      superficy: 1850,
      capacity: 130,
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name: "Start-Way",
      superficy: 300,
      capacity: 253,
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name: "Locomotiv'",
      superficy: 600,
      capacity: 136,
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Digital Village",
      superficy: 150,
      capacity: 52,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name: "WIGI - Grands-Hommes",
      superficy: 200,
      capacity: 205,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name: "Mota",
      superficy: 400,
      capacity: 50,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "WIGI - Wilson",
      superficy: 220,
      capacity: 152,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ocube",
      superficy: 600,
      capacity: 50,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Coworkings', null, {});
  }
};