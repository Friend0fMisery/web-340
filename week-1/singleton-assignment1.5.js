/*
============================================
; Title: Assignment 1.5
; Author: Justin Singleton
; Date: 10 August 2019
; Description: This program demonstrates the
; use of Node servers.
;===========================================
*/

const header = require('../singleton-header.js');
console.log(header.display("Justin", "Singleton", "Assignment 1.5"));

var http = require("http");

function processRequest(req, res) {

var body = "Hello World! My name is Justin Singleton, and I am excited to learn!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
