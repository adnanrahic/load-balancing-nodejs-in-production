const express = require('express')
const app = express()
const port = process.argv[2]
app.get('/', (req, res) => {
  res.status(200).send('Hello World from port ' + port)
})
app.listen(port, () => console.log('Server running on port ' + port))
