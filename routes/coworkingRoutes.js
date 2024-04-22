const express = require('express')
const router = express.Router()
const coworkingsData = require('../coworkings')
const { Coworking } = require('../db/sequelizeSetup')

router
    .route('/')
    .get(async (req, res) => {
        try {
            const results = await Coworking.findAll()
            res.json({ message: `Il y a ${results.length} coworkings`, data: results })
        } catch (error) {
            res.json({ message: `Une erreur est survenue` })
        }
    })
    .post(async (req, res) => {
        try {
            const newCoworking = await Coworking.create(req.body)
            res.json({ message: `Un coworking a bien été ajouté`, data: newCoworking })
        } catch (error) {
            res.json({ message: `Une erreur est survenue`, data: error })
        }
    })

router
    .route('/:id')
    .get(async (req, res) => {
        try {
            const result = await Coworking.findByPk(req.params.id);
            if (!result) {
                return res.json({ message: `Le coworking n'existe pas` })
            }
            res.json({ message: 'Coworking trouvé', data: result })
        } catch (error) {
            res.json({ message: `Une erreur est survenue` })
        }
    })
    .put((req, res) => {
        const result = coworkingsData.find((el) => {
            return el.id === parseInt(req.params.id)
        })

        result.superficy = req.body.superficy
        res.json({ message: 'Le coworking a bien été modifié', data: result })
    })
    .delete((req, res) => {
        // on identifie la bonne ligne du tableau et on supprime l'élément s'il existe
        // let filteredArray = coworkingsData.filter(el => {
        //     return el.id !== parseInt(req.params.id)
        // })

        // coworkingsData = filteredArray

        const index = coworkingsData.findIndex((el) => {
            return el.id === parseInt(req.params.id)
        })

        coworkingsData.splice(index, 1)

        res.json({ message: 'Suppression coworking', data: coworkingsData })
    })

module.exports = router