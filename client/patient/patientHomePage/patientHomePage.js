
var patientHomePage = angular.module('patientHomePage', []);

function patientHomePageController () {
}

patientHomePage.component('patientHomePage', {
  template: require('./patientHomePage.html'),
  controller: patientHomePageController
});

module.exports = patientHomePage.name;