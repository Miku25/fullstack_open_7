const app = require('./app')
//const https = require('https')
const http = require('http')
//const fs = require('fs')
const config = require('./utils/config')

/*const options = {
  key: fs.readFileSync('bloglist-app.key'),
  cert: fs.readFileSync('bloglist-app.cert')
}*/

//const server = https.createServer(options, app)

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})