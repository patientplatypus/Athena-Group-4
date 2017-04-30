var mongoose = require('mongoose');

//mongoose sub-doc of the parent schema
var reportSchema = new mongoose.Schema({
  proceduredate: { type: Date, default: Date.now() },
  vitals: { type: String, required: false },
  symptoms: { type: String, required: false },
  notes: { type: String, required: false },
});

//parent schema
var patientSchema = new mongoose.Schema({
  username: { type: String, required: false},
  password: { type: String, required: false},
  name: { type: String, required: false},
  dob: { type: String, required: false},
  history: { type: String, required: false},
  allergies: { type: String, required: false},
  medications: { type: String, required: false},
  immunizations: { type: String, required: false},
  report: [reportSchema]
});


var Patient = mongoose.model('Patient', patientSchema);
var Report = mongoose.model('Report', reportSchema);
module.exports = Patient;
