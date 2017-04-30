(function() {
  var app = angular.module('patientApp');

  app.service('procedureService', function($http) {

    this.save = function(patientData, callback) {
          $http({
            method: 'POST',
            url: '/doctor/report',
            data: {
              name: patientData.patientname,
              proceduredate: patientData.proceduredate,
              vitals: patientData.vitals,
              symptoms: patientData.symptoms,
              notes: patientData.notes
            }
          }).then(function successCallback(response) {
            console.log('inside procedure success');
            callback();

          }, function errorCallback(response) {
              console.log('error', response);
          });
        }

  });
})();
