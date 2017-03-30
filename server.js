const dotenv = require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 5000 
const leds = require('./src/leds');
const request = require('request')
const app = express()

app.get('/', function (req, res) {
  res.send('Hi there.')
})

app.post('/post', function (req, res) {
  console.log(req)
  res.send('POST request recieved.')
  leds.blink(1,0,1)
  res.end()
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})