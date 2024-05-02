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
    /**
    * @openapi
    * /api/coworkings:
    *   get:
    *     summary: Get all coworkings
    *     tags: [Coworkings]
    *     responses:
    *       200:
    *         description: The list of coworkings.
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Coworking'
    *       500:
    *         description: Some server error 
    */
    .get(findAllCoworkings)
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
    */
    .post(protect, createCoworking)

router
    .route('/search')
    /**
    * @openapi
    * /api/coworkings/search:
    *   get:
    *     summary: Get a list of coworkings that match with search parameters
    *     tags: [Coworkings]
    *     parameters:
    *        - in: query
    *          name: name
    *          schema:               
    *          type: string
    *          description: The string that could match in any coworkings name
    *     responses:
    *       200:
    *         description: The coworking response by id
    *         contents:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Coworking'
    *       404:
    *         description: The coworking was not found
    */
    .get(searchCoworkings)

router
    .route('/:id')
    /**
    * @openapi
    * /api/coworkings/{id}:
    *   get:
    *     summary: Get the coworking by id
    *     tags: [Coworkings]
    *     parameters:
    *       - in: path
    *         name: id
    *         schema:
    *           type: string
    *         required: true
    *         description: The coworking id
    *     responses:
    *       200:
    *         description: The coworking response by id
    *         contents:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Coworking'
    *       404:
    *         description: The coworking was not found
    */
    .get(findCoworkingByPk)
    /**
    * @openapi
    * /api/coworkings/{id}:
    *   put:
    *    summary: Update the coworking by the id
    *    tags: [Coworkings]
    *    parameters:
    *      - in: path
    *        name: id
    *        schema:
    *          type: string
    *        required: true
    *        description: The coworking id
    *    requestBody:
    *      required: true
    *      content:
    *        application/json:
    *          schema:
    *            $ref: '#/components/schemas/Coworking'
    *    responses:
    *      200:
    *        description: The coworking was updated
    *        content:
    *          application/json:
    *            schema:
    *              $ref: '#/components/schemas/Coworking'
    *      404:
    *        description: The coworking was not found
    *      500:
    *        description: Some error happened
    */
    .put(protect, updateCoworking)
    /**
    * @openapi
    * /api/coworkings/{id}:
    *  delete:
    *     summary: Remove the coworking by id
    *     tags: [Coworkings]
    *     parameters:
    *       - in: path
    *         name: id
    *         schema:
    *           type: string
    *         required: true
    *         description: The coworking id
    *
    *     responses:
    *       200:
    *         description: The coworking was deleted
    *       404:
    *         description: The coworking was not found
    */
    .delete(protect, deleteCoworking)

module.exports = router