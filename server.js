const dotenv = require('dotenv').config()
const http = require('http')
const port = process.env.PORT || 5000 
const leds = require('./src/leds');

leds.blink(1,0,1)

function handleRequest(request, response){
  response.end('It Works!! Path Hit: ' + request.url)
}

var server = http.createServer(handleRequest)

server.listen(port, function(){
  console.log("Server listening on: http://localhost:%s", port)
})