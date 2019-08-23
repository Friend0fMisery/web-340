/*
============================================
; Title: Assignment 3.4
; Author: Justin Singleton
; Date: 23 August 2019
; Description: This program demonstrates the
; use of Node.js Express routing and
; navigation.
;===========================================
*/
// links to modules //
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();
// path to views //
app.set('views', path.resolve(__dirname, 'views'));
// use ejs engine //
app.set('view engine', 'ejs');
// use logger //
app.use(logger('short'));
// home page routing //
app.get('/', function(request, response) {
  response.render('index', {
    message: "home page"
  });
});
// about page routing //
app.get('/about', function(request, response) {
  response.render('about', {
    message: "about page"
  });
});
// contact page routing //
app.get('/contact', function(request, response) {
  response.render('contact', {
    message: 'contact page'
  });
});
// products page routing //
app.get('/products', function(request, response) {
  response.render('products', {
    message: 'products page'
  });
});
// create server //
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.");
});
