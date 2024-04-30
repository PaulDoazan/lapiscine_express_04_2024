module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      username: "pauldoazan",
      password: "mdp",
      email: "paul.doazan@example.com",
      RoleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      username: "mathildedoazan",
      password: "mdp",
      email: "mathilde.doazan@example.com",
      RoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      username: "antoinedupont",
      password: "mdp",
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