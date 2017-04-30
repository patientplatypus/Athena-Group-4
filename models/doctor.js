var mongoose = require('mongoose');

//parent schema
var doctorSchema = new mongoose.Schema({
  username: { type: String, required: false},
  password: { type: String, required: false},
  name: { type: String, required: false},
  patientnames: []
});


var Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
