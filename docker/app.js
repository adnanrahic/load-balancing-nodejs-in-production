const os = require('os')
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.status(200).send('Hello from container: ' + os.hostname())
})
module.exports = app
