const express = require('express')
const router = express.Router()
const { login, logout } = require('../controllers/authControllers')
const authorization = require('../middlewares/authorization')

router
    .route('/')
    .get((req, res) => {
        res.json({ message: 'Hello utilisateur!' })
    })

router
    .route('/protected')
    .get(authorization, (req, res) => {
        return res.json({ user: { id: req.userId, role: req.userRole } });
    })

router
    .route('/login')
    .post(login)

router
    .route('/logout')
    .post(logout)

router
    .route('/:id')
    .get((req, res) => {
        res.json({ message: `Utilisateur n°${req.params.id}` })
    })

module.exports = router