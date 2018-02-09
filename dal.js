require('dotenv').config()
const POUCHDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find-http'))
const db = new PouchDB(process.env.COUCHDB_URL)

const getCar = (id, cb) => db.get(id, cb)

modules.exports = { getCars }
