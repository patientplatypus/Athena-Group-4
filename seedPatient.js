// seedRaces.js
require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.mlabdatabase);

var Doctor = require('./models/doctor');
var Patient = require('./models/patient');

var patientData = [
  { username: 'patientplatypus',
    password: 'suchaplatypus',
    name: 'Plat E. Puss',
    dob: 'Feb 2, 1994',
    history: 'baggage',
    allergies: 'winning',
    medications: 'winning more',
    immunizations: 'not not winning',
    report: [{
      proceduredate: 2020/10/10,
      vitals: 'awesome',
      symptoms: 'not awesome',
      notes: 'so awesome'
    }]
  }
];

Patient.create(patientData, function(err, patients) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Patients inserted: ', patients);
  process.exit();
});
