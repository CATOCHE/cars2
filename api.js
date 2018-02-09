require('dotenv').config()
const bodyParser = require("body-parser")
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const port = process.env.PORT
const {getCar, getOEM} = require('./dal')

app.get('/', (req,res)=>{
  res.send('Howdy!')
})

app.get('/cars/:id', (req, res, next)=>{
  //res.send(`you askes for car: ${req.parm.id}`)
  getCar(req.params.id, function(err, car){
    if (err){
      next(new HTTPError(err.status, err.message, err) )
      return
    }
    res.send(car)
  })
})

app.get('/oems/:id', (req,res,next)=>{
  res.send(`you asked for OEM: ${req.params.id}`)
})

app.use(function(err,req,res,next){
  res.status(err.status || 500).send(err.message)
})

app.listen(port || 4000, () => console.log('Cars API up and running on port ', port))
