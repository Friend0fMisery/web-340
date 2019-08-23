/*
============================================
; Title: Assignment 3.3
; Author: Justin Singleton
; Date: 23 August 2019
; Description: This program demonstrates the
; use of Node advanced routing.
;===========================================
*/
// link modules //
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();
// access views path //
app.set('views', path.resolve(__dirname, 'views'));
// use ejs engine //
app.set('view engine', 'ejs');
// use logger //
app.use(logger('short'));
// routing for employeeId //
app.get('/:employeeId', function(request, response) {
  var employeeId = parseInt(request.params.employeeId, 10);
  response.render('index', {
    employeeId: employeeId
  });
});
// create server on 8080 //
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.");
});
