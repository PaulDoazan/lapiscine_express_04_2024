// CONFIG DB
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt')
const CoworkingModel = require('../models/coworkingModel')
const mockCoworkings = require('../coworkings');
const users = require('./users');
const UserModel = require('../models/userModel');

// Option: Passing parameters separately (other dialects)
const sequelize = new Sequelize('bx_coworkings', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
});

const Coworking = CoworkingModel(sequelize);
const User = UserModel(sequelize);

sequelize.sync({ force: true })
    .then(() => {
        mockCoworkings.forEach(coworking => {
            Coworking.create(coworking)
                .then()
                .catch(error => {
                    console.log(error)
                })
        })
        users.forEach(async (user) => {
            const hashResult = await bcrypt.hash(user.password, 10)
            User.create({ ...user, password: hashResult })
                .then()
                .catch(error => {
                    console.log(error)
                })
        })
    })
    .catch((error) => {
        console.log(error)
    })

sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

module.exports = { sequelize, Coworking, User }