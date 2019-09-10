const childProcess = require('child_process')
const numCPUs = require('os').cpus().length
for (let i = 0; i < numCPUs; i++) {
  const port = 3000 + i
  childProcess.fork('app.js', [port])
}
