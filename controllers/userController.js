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
        const hashPassword = await bcrypt.hash(req.body.password, 5)
        req.body.password = hashPassword
        const result = await User.create(req.body)
        res.json({ message: `Utilisateur créé`, data: result })
    } catch (error) {
        errorValidationConstraint(error, res, "Nom d'utilisateur")
    }
}

const updateUser = async (req, res) => {
    try {
        const result = await User.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `L'utilisateur n'existe pas` })
        }
        if (req.body.password) {
            const hash = await bcrypt.hash(req.body.password, 8)
            req.body.password = hash
        }
        await result.update(req.body)
        res.status(201).json({ message: 'Utilisateur modifié', data: result })
    } catch (error) {
        errorValidationConstraint(error, res, "Nom d'utilisateur")
    }
}

const updateProfile = async (req, res) => {
    // 1 récupérer la ligne de l'utilisateur au sein de la table User, sans le req.params.id
    try {
        const result = await User.findByPk(req.userId);
        if (req.body.password) {
            const hash = await bcrypt.hash(req.body.password, 8)
            req.body.password = hash
        }
        await result.update(req.body)
        res.status(201).json({ message: 'Utilisateur modifié', data: result })
    } catch (error) {
        errorValidationConstraint(error, res, "Nom d'utilisateur")
    }
    // 2 on modifie les propriétés fournies dans le req.body

}

module.exports = { findAllUsers, findUserByPk, createUser, updateProfile, updateUser }