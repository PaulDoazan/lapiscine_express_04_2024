module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [{
      id: 1,
      label: "superadmin"
    },
    {
      id: 2,
      label: "admin"
    },
    {
      id: 3,
      label: "user"
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};