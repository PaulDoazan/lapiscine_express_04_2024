module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.createTable('Coworkings', {"id":{"type":Sequelize.DataTypes.INTEGER,"allowNull":false,"primaryKey":true,"autoIncrement":true,"field":"id"},"name":{"type":Sequelize.DataTypes.STRING,"allowNull":false,"field":"name","unique":true},"superficy":{"type":Sequelize.DataTypes.INTEGER,"field":"superficy"},"capacity":{"type":Sequelize.DataTypes.INTEGER,"field":"capacity"},"price":{"type":Sequelize.DataTypes.JSON,"field":"price"},"address":{"type":Sequelize.DataTypes.JSON,"field":"address"},"createdAt":{"type":Sequelize.DataTypes.DATE,"allowNull":false,"field":"createdAt"},"updatedAt":{"type":Sequelize.DataTypes.DATE,"allowNull":false,"field":"updatedAt"}}, {transaction});await queryInterface.createTable('Users', {"id":{"type":Sequelize.DataTypes.INTEGER,"allowNull":false,"primaryKey":true,"autoIncrement":true,"field":"id"},"username":{"type":Sequelize.DataTypes.STRING,"allowNull":false,"field":"username","unique":true},"password":{"type":Sequelize.DataTypes.STRING,"field":"password"},"address":{"type":Sequelize.DataTypes.JSON,"field":"address"},"email":{"type":Sequelize.DataTypes.STRING,"field":"email","unique":true},"createdAt":{"type":Sequelize.DataTypes.DATE,"allowNull":false,"field":"createdAt"},"updatedAt":{"type":Sequelize.DataTypes.DATE,"allowNull":false,"field":"updatedAt"},"RoleId":{"type":Sequelize.DataTypes.INTEGER,"field":"RoleId","defaultValue":3}}, {transaction});await queryInterface.createTable('Roles', {"id":{"type":Sequelize.DataTypes.INTEGER,"allowNull":false,"primaryKey":true,"autoIncrement":true,"field":"id"},"label":{"type":Sequelize.DataTypes.STRING,"field":"label"}}, {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addConstraint('Users', {"fields":["RoleId"],"type":"foreign key","name":"Users_RoleId_fkey","references":{"table":"Roles","field":"id"},"onDelete":"SET NULL","onUpdate":"CASCADE"}, {transaction});await queryInterface.addConstraint('Coworkings', {"fields":["name"],"name":"Coworkings_name_unique","type":"unique"}, {transaction});await queryInterface.addConstraint('Users', {"fields":["username"],"name":"Users_username_unique","type":"unique"}, {transaction});await queryInterface.addConstraint('Users', {"fields":["email"],"name":"Users_email_unique","type":"unique"}, {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeConstraint('Users', 'Users_RoleId_fkey', {transaction});await queryInterface.removeConstraint('Coworkings', 'Coworkings_name_unique', {transaction});await queryInterface.removeConstraint('Users', 'Users_username_unique', {transaction});await queryInterface.removeConstraint('Users', 'Users_email_unique', {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.dropTable('Coworkings', {transaction});await queryInterface.dropTable('Users', {transaction});await queryInterface.dropTable('Roles', {transaction});
    })
    await queryInterface.sequelize.transaction(async (transaction) => {
    
    })
  },
};