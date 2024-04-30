module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addColumn('Coworkings', 'UserId',{"type":Sequelize.DataTypes.INTEGER}, {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addConstraint('Coworkings', {"fields":["UserId"],"type":"foreign key","name":"Coworkings_UserId_fkey","references":{"table":"Users","field":"id"},"onDelete":"SET NULL","onUpdate":"CASCADE"}, {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeConstraint('Coworkings', 'Coworkings_UserId_fkey', {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeColumn('Coworkings', 'UserId', {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },
};