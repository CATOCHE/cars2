require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_URL)



db.createIndex({ index:{fields:['type'] } })
.then(()=> console.log('document type index created'))
.catch(err => console.log ('err creating type index',err))

db.createIndex({ index: {fields:['model']} })
.then(()=> console.log('document model index created'))
.catch(err => console.log ('err creating type index',err))

db.createIndex({ index: { fields: ['make'] } })
.then(()=> console.log('document make index created'))
.catch(err => console.log ('err creating type index',err))
