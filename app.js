const express = require('express')
const app = express()
const port = 3000

const coworkingsData = require('./coworkings')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
    res.send('Hello utilisateur!')
})

app.get('/api/users/:id', (req, res) => {
    res.send(`Utilisateur n°${req.params.id}`)
})

app.get('/api/comments', (req, res) => {
    res.send('Hello Commentaire!')
})

app.get('/api/comments/:id', (req, res) => {
    res.send(`Commentaire n°${req.params.id}`)
})

app.get('/api/coworkings', (req, res) => {
    res.send('Hello Coworkings!')
})

app.get('/api/coworkings/:id', (req, res) => {
    console.log(req.params.id)
    // 12
    // Nom du coworking n°12 : Oasis Coworking
    const result = coworkingsData.find((el) => {
        return el.id === parseInt(req.params.id)
    })

    console.log(result)
    res.send(`Nom du coworking n°${result.id} : ${result.name}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})