const express = require('express')
const router = express.Router()
const { protect, restrictToOwnUser } = require('../middlewares/auth')
const { createReview, findAllReviews, findReviewByPk, updateReview, deleteReview } = require('../controllers/reviewController')
const { Review } = require('../db/sequelizeSetup')

router
    .route('/')
    .get(findAllReviews)
    .post(protect, createReview)

router
    .route('/:id')
    .get(findReviewByPk)
    .put(protect, restrictToOwnUser(Review), updateReview)
    .delete(protect, restrictToOwnUser(Review), deleteReview)

module.exports = router