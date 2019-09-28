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
  name: {type: String, required: true },
  title: {type: String, required: false },
  email: {type: String, required: false },
  notes: {type: String, required: false }
});

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
