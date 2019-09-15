/*
============================================
; Title: EMS
; Author: Justin Singleton
; Date: 7 September 2019
; Description: This program demonstrates the
; use of the layouts and is part of a
; larger application.
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger('short'));

app.get("/", function(req, res) {
  res.render("index", {
    title: "Home Page",
  });
});

app.get("/view", (req, res) => {
  res.render("view");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
