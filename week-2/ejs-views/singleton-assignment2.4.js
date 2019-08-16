/*
============================================
; Title: Assignment 2.4
; Author: Justin Singleton
; Date: 16 August 2019
; Description: This program demonstrates the
; use of ejs views.
;===========================================
*/

var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
// tells express that views is in the 'views' directory //
app.set('views', path.resolve(__dirname, 'views'));
// tells express to use ejs engine //
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', {
    firstName: "Justin",
    lastName: "Singleton",
    address: "1234 Madeup Ave."
  });
});

http.createServer(app).listen(8080, function() {
  console.log("EJS-Views app started on port 8080.");
});
