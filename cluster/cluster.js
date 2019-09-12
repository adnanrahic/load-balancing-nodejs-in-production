const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const app = require('./app')
const port = 3000

const masterProcess = () => {
  console.log(`Master  running on port ${port} with pid ${process.pid}`)

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
    cluster.on('exit', (worker) => cluster.fork())
  }
}
const childProcess = () => {
  app.listen(port, () =>
    console.log(`Worker${cluster.worker.id} running on port ${port} with pid ${cluster.worker.process.pid}`))
}

if (cluster.isMaster) {
  masterProcess()
} else {
  childProcess()
}
