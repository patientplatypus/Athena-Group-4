var patientHomePage = require('./patientHomePage/patientHomePage')

var patientApp = angular.module('patientApp', [
  'ngRoute',
  patientHomePage
]);

patientApp.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
      template: '<patient-home-page></patient-home-page>'
    });
}]);

