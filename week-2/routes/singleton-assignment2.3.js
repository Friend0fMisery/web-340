/*
============================================
; Title: Assignment 2.3
; Author: Justin Singleton
; Date: 15 August 2019
; Description: This program demonstrates the
; use of Express routes.
;===========================================
*/
// links to express and http //
var express = require('express');
var http = require('http');
// variable to use express funtion //
var app = express();
// response for homepage //
app.get("/", function(request, response) {
  response.end("Welcome to the Homepage!");
});
// response for about page //
app.get("/about", function(request, response) {
  response.end("Welcome to the About page!");
});
// response for contact page //
app.get("/contact", function(request, response) {
  response.end("Welcome to the Contact page!");
});
// response for unknown page 404 //
app.use(function(request, response) {
  response.statusCode = 404;
  response.end('404!');
});
// create server //
http.createServer(app).listen(8080);
