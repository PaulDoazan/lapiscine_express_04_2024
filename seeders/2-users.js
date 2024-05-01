const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    const hash = await bcrypt.hash('mdp', 1)

    return queryInterface.bulkInsert('Users', [{
      id: 1,
      username: "pauldoazan",
      password: hash,
      email: "paul.doazan@example.com",
      RoleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      username: "mathildedoazan",
      password: hash,
      email: "mathilde.doazan@example.com",
      RoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      username: "antoinedupont",
      password: hash,
      email: "antoine.dupont@example.com",
      RoleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};