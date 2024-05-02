/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - UserId
 *         - CoworkingId
 *         - content
 *         - rating
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the review, auto-generated
 *         UserId:
 *           type: integer
 *           description: The id of the user who made the review, auto-generated
 *         CoworkingId:
 *           type: integer
 *           description: The id of the coworking reviewed
 *         content:
 *           type: string
 *           description: The content of review
 *         rating:
 *           type: integer
 *           description: The rating of a review, between 0 and 5
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added, auto-generated
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the user was updated, auto-generated
 *       example:
 *         id: 879
 *         content: Nice place
 *         rating: 4
 *         UserId: 45
 *         CoworkingId: 12
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

const express = require('express')
const router = express.Router()
const { protect } = require('../middlewares/auth')
const { createReview, findAllReviews, findReviewByPk, updateReview, deleteReview } = require('../controllers/reviewController')

router
    .route('/')
    .get(findAllReviews)
    .post(protect, createReview)

router
    .route('/:id')
    .get(findReviewByPk)
    .put(protect, updateReview)
    .delete(protect, deleteReview)

module.exports = router