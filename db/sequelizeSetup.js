// CONFIG DB
const { Sequelize } = require('sequelize');
const CoworkingModel = require('../models/coworkingModel')

// Option: Passing parameters separately (other dialects)
const sequelize = new Sequelize('bx_coworkings', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
});

CoworkingModel(sequelize)
sequelize.sync({ force: true });

sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))
// 

const myFunction = (name) => {
    console.log('hello ' + name)
}

module.exports = { sequelize, myFunction }