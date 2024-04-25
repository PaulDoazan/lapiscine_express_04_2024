const express = require('express')
const { findAllUsers, findUserByPk, createUser, updateSelf } = require('../controllers/userController')
const { login, logout } = require('../controllers/authController')
const { protect } = require('../middlewares/auth')
const router = express.Router()

router
    .route('/')
    .get(findAllUsers)

router
    .route('/signup')
    .post(createUser)

router
    .route('/profile')
    .put(protect, updateSelf)



// updateUser pour superadmin
// updateUser où chaque utilisateur peut modifier ses données, pas de req.params.id
// deleteUser

router
    .route('/login')
    .post(login)

router
    .route('/logout')
    .post(logout)

router
    .route('/:id')
    .get(findUserByPk)

module.exports = router