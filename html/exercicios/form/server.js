const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })) // me prermite recibir un objeto en devolucion

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario Incluido!!!</h1>')
})

app.post('/usuarios/:is', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario Alterado!!!</h1>')
})

app.listen(3003)