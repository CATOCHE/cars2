require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_TC_URL)

const bodyParser = require("body-parser")
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const port = process.env.PORT
const {bulkDocs} = require('./dal')


const cars_db = [
  {
    "_id": "car_explorer",
    "make": "ford",
    "model": "explorer",
    "model year": 2018,
    "color": "blue",
    "engine size": "3.6L",
    "type": "car"
  },
  {
    "_id": "car_volt",
    "make": "general motors",
    "model": "volt",
    "model year": 2018,
    "color": "black",
    "engine size": "1.6L",
    "type": "car"
  },
  {
    "_id": "car_mustang",
    "make": "ford",
    "model": "mustang",
    "model year": 2018,
    "color": "red",
    "engine size": "5.0L",
    "type": "car"
  },
  {
    "_id": "car_cherokee",
    "make": "fiat-chrysler",
    "model": "cherokee",
    "model year": 2018,
    "color": "marroon",
    "engine size": "3.3L",
    "type": "car"
  }
]

bulkDocs(cars_db).then (function(result){
  console.log('This is the result: ', result)
})
.catch(function (err){
  console.log('you have an error')
})


//   , function(err, response) {
//   if (err) {
//     next(new HTTPError(err.status, err.message, err) )
//     return console.log(err)
//   }
//   // handle result
// })


app.use(function(err,req,res,next){
  res.status(err.status || 500).send(err.message)
})
