const { User } = require('../db/sequelizeSetup')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = require('../configs/tokenData')

const rolesHierarchy = {
    edit: ["edit"],
    admin: ["admin", "edit"],
    superadmin: ["superadmin", "admin", "edit"],
}

const login = (req, res) => {
    // A. On vérifie que l'utilisateur qui tente de se connecter existe bel et bien dans notre BDD
    User.scope('withPassword').findOne({ where: { username: req.body.username } })
        .then((result) => {
            // B. Si l'utilisateur n'existe pas, on renvoie une réponse erreur Client
            if (!result) {
                return res.status(404).json({ message: `Le nom d'utilisateur n'existe pas.` })
            }

            return bcrypt.compare(req.body.password, result.password)
                .then((isValid) => {
                    if (!isValid) {
                        return res.status(401).json({ message: `Le mot de passe n'est pas valide.` })
                    }
                    const token = jwt.sign({
                        data: result.id
                    }, SECRET_KEY, { expiresIn: '10h' });

                    // Possibilité de stocker le jwt dans un cookie côté client
                    res.cookie('access_token', token).json({ message: `Login réussi` })
                })
        })
        .catch((error) => {
            res.status(500).json({ data: error.message })
        })
}

const logout = (req, res) => {
    return res
        .clearCookie("access_token")
        .json({ message: "Successfully logged out 😏 🍀" });
};

module.exports = { login, logout }






















