/*
============================================
; Title:  employee.js
; Author: Justin Singleton
; Date:   19 September 2019
; Description: File for the Employee database
; model.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
