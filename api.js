require('dotenv').config()
const bodyParser = require("body-parser")
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const port = process.env.PORT
const {getCar, getOEM, getAllDocs, allDocs} = require('./dal')
const {map, pathOr, split, head, last, filter} = require('ramda')
const errNext = next => err =>
      next(new HTTPError(err.status, err.meassge, err))

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
//  res.send(`you asked for OEM: ${req.params.id}`)
  getOEM(req.params.id, function(err, oem){
    if (err){
      next(new HTTPError(err.status, err.message, err) )
      return
    }
    res.send(oem)
  })
})


app.get('/cars', (req, res, next)=>{
  var filterFn = null
  if ( pathOr(null, ['query', 'q'], req)) {
    const filterProp = head(split(':', req.query.q))
    const filterValue = last(split(':', req.query.q))

    filterFn = docs =>
      res.status(200).send(filter(doc => doc[filterProp] == filterValue, docs))
  } else {
    filterFn = docs => res.status(200).send(doc)
  }

  const options = {include_docs : true,
                  start_key: 'car_',
                  end_key: 'car_\ufff0'}
  allDocs(options)
  .then(docs => res.send(docs))
  .catch(err=>errNext(next))
})

app.get('/oems', (req, res, next)=>{
  const options = {include_docs : true,
                  start_key: 'oem_',
                  end_key: 'oem_\ufff0'}
  allDocs(options)
  .then(docs => res.send(docs))
  .catch(err=>errNext(next))
})


app.get('/test-cars/', (req,res,next)=>{
  getAllDocs({include_docs:true}, function(err, allDocsResult){
    if (err){
      next(new HTTPError(err.status, err.message, err) )
      return
    }
    res.send(map(r=>r.doc,allDocsResult.rows))
  })
})


app.use(function(err,req,res,next){
  console.log('API error: ', err)
  res.status(err.status || 500).send(err.message)
})

app.listen(port || 4000, () => console.log('Cars API up and running on port ', port))
