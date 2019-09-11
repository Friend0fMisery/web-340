/*
============================================
; Title: Assignment 6.3
; Author: Justin Singleton
; Date: 10 September 2019
; Description: This program demonstrates the
; use of mongoose connecting to a mongodb
; server with express.
;===========================================
*/
// requires //
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var http = require('http');

// connect to database //
var mongoDB = "mongodb+srv://Friend0fMisery:Kool6767!@buwebdev-cluster-1-sn3vf.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
  console.log("Application connected to Atlas MongoDB instance");
});
// application //
var app = express();
app.use(logger('short'));
// create server //
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080");
});
