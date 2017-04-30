var mongoose = require('mongoose');

//parent schema
var patientSchema = new mongoose.Schema({
  patientname: { type: String, required: false },
  proceduredate: { type: Date, default: Date.now() },
  vitals: { type: String, required: false },
  symptoms: { type: String, required: false },
  notes: { type: String, required: false },
});


var Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
