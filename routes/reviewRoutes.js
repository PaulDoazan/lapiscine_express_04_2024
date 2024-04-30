const express = require('express')
const router = express.Router()
const { createReview, findAllReviews, findReviewByPk } = require('../controllers/reviewController')

router
    .route('/')
    .get(findAllReviews)
    .post(createReview)

router
    .route('/:id')
    .get(findReviewByPk)

module.exports = router