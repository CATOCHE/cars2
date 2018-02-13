require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_URL)
const dbtc = new PouchDB(process.env.COUCHDB_TC_URL)
const {pluck} = require('ramda')

const getCar = (id, cb) => db.get(id, cb)
const getOEM = (id, cb) => db.get(id, cb)
const bulkDocs = (options) => dbtc.bulkDocs(options)



const allDocs = options => db.allDocs(options)
.then(result => pluck('doc',result.rows))

module.exports = {getCar, getOEM, bulkDocs, allDocs}
