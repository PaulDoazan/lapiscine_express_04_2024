const SECRET_KEY = require('../configs/tokenData')
const jwt = require('jsonwebtoken')

const authorization = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log(decoded.data)
        req.userId = decoded.data;
        return next();
    } catch (error) {
        return res.sendStatus(403);
    }
};

module.exports = authorization