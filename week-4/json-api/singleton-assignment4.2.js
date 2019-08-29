/*
============================================
; Title: Assignment 4.2
; Author: Justin Singleton
; Date: 29 August 2019
; Description: This program demonstrates the
; use of JSON APIs.
;===========================================
*/
// module variables //
var express = require("express");
var http = require('http');
var app = express();
// get function for JSON data //
app.get("/customer/:id", function(request, response) {
  var id = parseInt(request.params.id, 10);
  response.json({
    firstName: "Justin",
    lastName: "Singleton",
    employeeId: id
  });
});
// create server on 8080 //
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
