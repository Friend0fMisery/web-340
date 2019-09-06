/*
============================================
; Title: Assignment 5.2
; Author: Justin Singleton
; Date: 5 September 2019
; Description: This program demonstrates the
; use of the EJS template and if-else
; rendering.
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
// list of names //
var n = ["Justin", "John", "Mason", "Tyler", "Nicollette"];
// render list //
app.get("/", function(request, response) {
  response.render("index", {
    names: n
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080")
});
