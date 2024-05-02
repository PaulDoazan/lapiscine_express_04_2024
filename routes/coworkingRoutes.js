/**
 * @swagger
 * components:
 *   schemas:
 *     Coworking:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the coworking
 *         name:
 *           type: string
 *           description: The name of your coworking
 *         price:
 *           type: json
 *           description: The prices of your coworking
 *         address:
 *           type: json
 *           description: The address of your coworking
 *         superficy:
 *           type: integer
 *           description: The coworking superficy
 *         capacity:
 *           type: integer
 *           description: The coworking capacity
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the coworking was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the coworking was updated
 *       example:
 *         id: 12
 *         name: Oasis Coworking
 *         superficy: 300
 *         capacity: 50
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @openapi
 * tags:
 *   name: Coworkings
 *   description: The coworkings managing API
 * /api/coworkings:
 *   post:
 *     summary: Create a new coworking
 *     tags: [Coworkings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Coworking'
 *     responses:
 *       200:
 *         description: The created coworking.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coworking'
 *       500:
 *         description: Some server error
 * /books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */

const express = require('express')
const router = express.Router()
const {
    findAllCoworkings,
    createCoworking,
    findCoworkingByPk,
    updateCoworking,
    deleteCoworking,
    searchCoworkings } = require('../controllers/coworkingControllers')
const { protect } = require('../middlewares/auth')

router
    .route('/')
    .get(findAllCoworkings)
    .post(protect, createCoworking)

router
    .route('/search')
    .get(searchCoworkings)

router
    .route('/:id')
    .get(findCoworkingByPk)
    .put(protect, updateCoworking)
    .delete(protect, deleteCoworking)

module.exports = router