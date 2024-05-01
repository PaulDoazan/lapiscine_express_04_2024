// CONFIG DB
const { Sequelize } = require('sequelize');
const CoworkingModel = require('./models/coworkingModel')
const UserModel = require('./models/userModel')
const RoleModel = require('./models/roleModel')
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];


// Option: Passing parameters separately (other dialects)
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// const sequelize = new Sequelize('bx_coworkings', 'root', '', {
//     host: 'localhost',
//     dialect: 'mariadb',
//     logging: false
// });

const Coworking = CoworkingModel(sequelize);
const User = UserModel(sequelize);
const Role = RoleModel(sequelize);

// Par défaut, tous les utilisateurs créés sont "user"
Role.hasMany(User, {
    foreignKey: {
        defaultValue: 3,
    },
});
User.belongsTo(Role);

User.hasMany(Coworking)
Coworking.belongsTo(User)

sequelize.sync()
    .then(() => {
        // mockCoworkings.forEach(coworking => {
        //     Coworking.create(coworking)
        //         .then()
        //         .catch(error => {
        //             console.log(error)
        //         })
        // })

        // Role.create({ id: 1, label: "superadmin" })
        // Role.create({ id: 2, label: "admin" })
        // Role.create({ id: 3, label: "user" })

        // mockUsers.forEach(async user => {
        //     const hash = await bcrypt.hash(user.password, 10)
        //     user.password = hash
        //     User.create(user)
        //         .then()
        //         .catch(error => {
        //             console.log(error)
        //         })
        // })
    })
    .catch((error) => {
        console.log(error)
    })

sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

module.exports = { sequelize, Coworking, User, Role }