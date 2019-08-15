/*
============================================
; Title: Assignment 2.2
; Author: Justin Singleton
; Date: 15 August 2019
; Description: This program demonstrates the
; use of Express basics
;===========================================
*/
// links to use express and http //
var express = require('express');
var http = require('http');
// variable linked to express function //
var app = express();
// request response function with Hello World response //
app.use(function(request, response) {
  console.log("In comes a request to " + require.url);
  response.end("Hello World");
});
// create server //
http.createServer(app).listen(8080);
