/*
============================================
; Title: Assignment 5.3
; Author: Justin Singleton
; Date: 7 September 2019
; Description: This program demonstrates the
; use of the Pug template.
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

app = express();
// use pug engine //
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
// message on page start //
app.get("/", function(request, response) {
  response.render("index", {
    message: "Welcome to my crazy Pug World!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
