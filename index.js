const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const commentsRoute = require('./routes/comments')

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    next()
})

app.use('/api/comments', commentsRoute)

app.listen(5000, () => console.log('servidor rodando na porta 5000'))