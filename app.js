const express = require('express')
const app = express()
const port = 3000

const coworkingsData = require('./coworkings')

// convertir les réponses au format json : {message: ""}
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.get('/api/users', (req, res) => {
    res.json({ message: 'Hello utilisateur!' })
})

app.get('/api/users/:id', (req, res) => {
    res.json({ message: `Utilisateur n°${req.params.id}` })
})

app.get('/api/comments', (req, res) => {
    res.json({ message: 'Hello Commentaire!' })
})

app.get('/api/comments/:id', (req, res) => {
    res.json({ message: `Commentaire n°${req.params.id}` })
})

app.get('/api/coworkings', (req, res) => {
    res.json({ message: `Il y a ${coworkingsData.length} coworkings` })
})

app.get('/api/coworkings/:id', (req, res) => {
    const result = coworkingsData.find((el) => {
        return el.id === parseInt(req.params.id)
    })

    const msg = result ? `Nom du coworking n°${result.id} : ${result.name}` : `Le coworking recherché n'existe pas`

    res.json({ message: msg })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})