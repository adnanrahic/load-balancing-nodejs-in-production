const os = require('os')
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.status(200).send('Hello from container: ' + os.hostname())
})
app.listen(port, () => {
  console.log('Server running on ' + 'hostname: ' + os.hostname() + 'and port: ' + port)
})
