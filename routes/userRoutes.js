const express = require('express')
const { findAllUsers, findUserByPk, createUser } = require('../controllers/userController')
const { login } = require('../controllers/authController')
const router = express.Router()

router
    .route('/')
    .get(findAllUsers)

router
    .route('/signup')
    .post(createUser)

router
    .route('/login')
    .post(login)

router
    .route('/:id')
    .get(findUserByPk)

module.exports = router