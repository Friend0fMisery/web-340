/*
============================================
; Title:  Assignment 7.2
; Author: Justin Singleton
; Date:   19 September 2019
; Description: Demonstrations how to create
; a TDD unit test.
;===========================================
*/

var assert = require('assert');

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});
