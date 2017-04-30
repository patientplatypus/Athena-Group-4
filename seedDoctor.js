// seedRaces.js
require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.mlabdatabase);

var Doctor = require('./models/doctor');
var Patient = require('./models/patient');

var doctorData = [
  { username: 'doctordoctor',
    password: 'heynowtherekid',
    name: 'Dr. M. Ad',
    patient: ['please', 'dont', 'stop']}
];

Doctor.create(doctorData, function(err, doctors) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Doctors inserted: ', doctors);
  process.exit();
});

//
// var mongoose = require('mongoose');
//
// //mongoose sub-doc of the parent schema
// var reportSchema = new mongoose.Schema({
//   proceduredate: { type: Date, default: Date.now() },
//   vitals: { type: String, required: false },
//   symptoms: { type: String, required: false },
//   notes: { type: String, required: false },
// });
//
// //parent schema
// var patientSchema = new mongoose.Schema({
//   username: { type: String, required: false},
//   password: { type: String, required: false},
//   name: { type: String, required: false},
//   dob: { type: String, required: false},
//   history: { type: String, required: false},
//   allergies: { type: String, required: false},
//   medications: { type: String, required: false},
//   immunizations: { type: String, required: false},
//   report: [reportSchema]
// });
//
//
// var Student = mongoose.model('Student', studentSchema);
// var Report = mongoose.model('Report', reportSchema);
// module.exports = Student;
//
//
// var mongoose = require('mongoose');
//
// //parent schema
// var doctorSchema = new mongoose.Schema({
//   username: { type: String, required: false},
//   password: { type: String, required: false},
//   name: { type: String, required: false},
//   patientnames: []
// });
//
//
// var Doctor = mongoose.model('Doctor', doctorSchema);
// module.exports = Doctor;
