const os = require('os')
const app = require('./app')
const port = 3000
app.listen(port, () => {
  console.log('Server running on ' + 'hostname: ' + os.hostname() + 'and port: ' + port)
})
