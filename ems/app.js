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
var mongoose = require('mongoose');
var logger = require('morgan');
var Employee = require("./models/employee");
var mongoDB = "mongodb+srv://Friend0fMisery:Kool6767!@buwebdev-cluster-1-sn3vf.mongodb.net/test?retryWrites=true&w=majority";
var app = express();

mongoose.connect(mongoDB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB Instance");
});



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
