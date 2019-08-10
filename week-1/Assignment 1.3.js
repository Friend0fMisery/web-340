/*
============================================
; Title: Assignment 1.3
; Author: Justin Singleton
; Date: 10 August 2019
; Description: This program demonstrates the
; use of Node modules.
;===========================================
*/

const header = require('../singleton-header.js');
console.log(header.display("Justin", "Singleton", "Assignment 1.3"));

var url = require("url");

var parsedURL = url.parse("https://www.google.com/profile?name=justin");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);
