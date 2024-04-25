const { User } = require("../db/sequelizeSetup")
const bcrypt = require('bcrypt');
const { errorValidationConstraint } = require("../errorHandler/errorValidationConstraint")

const findAllUsers = (req, res) => {
    res.json({ message: 'Hello utilisateur!' })
}

const findUserByPk = (req, res) => {
    res.json({ message: `Utilisateur n°${req.params.id}` })
}

const createUser = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword
        const result = await User.create(req.body)
        res.json({ message: `Utilisateur créé`, data: result })
    } catch (error) {
        errorValidationConstraint(error, res, "Nom d'utilisateur")
    }
}

const updateSelf = async (req, res) => {
    console.log(req.userId)
    res.json({ message: 'update yourself' })
}

module.exports = { findAllUsers, findUserByPk, createUser, updateSelf }