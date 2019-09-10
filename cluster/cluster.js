const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const app = require('./app')
const port = 3000

const masterProcess = () => {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
    cluster.on('exit', (worker) => cluster.fork())
  }
}
const childProcess = () => {
  app.listen(port, () =>
    console.log('Server running on port ' + port + ' from worker #' + cluster.worker.id))
}

if (cluster.isMaster) {
  masterProcess()
} else {
  childProcess()
}
