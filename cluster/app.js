const cluster = require('cluster')
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  console.log('Hello from  worker #' + cluster.worker.id)
  res.status(200).send('Hello from worker #' + cluster.worker.id)
})
module.exports = app
