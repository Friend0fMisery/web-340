/*
============================================
; Title: Assignment 3.2
; Author: Justin Singleton
; Date: 22 August 2019
; Description: This program demonstrates the
; use of Node.js logging.
;===========================================
*/

var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();
// tells express that views are in views folder //
app.set('views', path.resolve(__dirname, 'views'));
// tells express to use ejs engine //
app.set('view engine', 'ejs');
// tells to use the logger //
app.use(logger('short'));
// message for front page //
app.get('/', function(request, response) {
  response.render('index', {
    message: "Welcome to the Jungle! We've got fun and games!"
  });
});
// create server //
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
