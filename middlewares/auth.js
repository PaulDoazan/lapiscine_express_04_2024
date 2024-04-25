const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../configs/privatekey');

const protect = (req, res, next) => {
    // 1. On vérifie la présence du token
    const token = req.cookies.access_token
    if (!token) {
        return res.status(401).json({ message: "Non authentifié" })
    }

    // 2. On vérifie la validité du token
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log(decoded.userId)
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "Jeton non valide" })
    }
}

module.exports = { protect }