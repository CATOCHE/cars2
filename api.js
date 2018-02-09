require('dotenv').config()
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')


const {getCars} = require ('./dal')




















app.get('/breeds/:id', (req, res, next) => ){
  res.send(`you asked for oem: ${req.params.id}`)
})

app.use (fucntion (err, req, res, next ){
  res.status (err.status || 500).send(err.message)
})

app.listen(port || 4000, () =>
console.log('cars api up and running on the port', port)
)
