const express = require('express')
const app = express()
const port = 3000

const coworkingsData = require('./coworkings')

console.log(coworkingsData[4])

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
    res.send(`Salut utilisateur n°${req.params.id}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})