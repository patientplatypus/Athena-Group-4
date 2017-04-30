var express = require('express');
var router = express.Router();
var Doctor = require('../models/doctor');
var Patient = require('../models/patient');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('doctor');
});

router.get('/patients', function(req, res, next){

});

router.get('/patient/:name', function(req, res, next) {
  Patient.find({ 'name': req.params.name}, (err, patients) => {
    if (err) console.log(err)
    res.json(patients)
  });
});

router.post('/patientreport', function(req, res, next) {
  console.log('name is: ', req.body.name)
  Patient.findOne({"name": req.body.name}, function(err, patient) {
    console.log('patient is: ', patient)
    patient.report.push({
      proceduredate: req.body.date,
      vitals: req.body.vitals,
      symptoms: req.body.symptoms,
      notes: req.body.notes,history
    });

    patient.save(function(err, patient) {
      if (err) {
        res.status(500).send({
          status: 'Error',
          error: err
        });
        console.log('Error: ', err);
      }

      res.json(patient);
    });
  });
})

module.exports = router;
