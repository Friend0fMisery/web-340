/*
============================================
; Title: Assignment 4.3
; Author: Justin Singleton
; Date: 29 August 2019
; Description: This program demonstrates the
; use of HTTP status codes.
;===========================================
*/

var express = require('express');
var http = require('http');
var app = express();

app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: "These are not the droids you are looking for."
  })
});

app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "May the Force be with you."
  })
});

app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: "I have a bad feeling about this."
  })
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080")
});
