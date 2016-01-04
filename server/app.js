var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

app.use('/lib', express.static(path.join(__dirname, '../lib')));
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/img', express.static(path.join(__dirname, '../img')));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../index.html'))
})

http.createServer(app).listen(4000);