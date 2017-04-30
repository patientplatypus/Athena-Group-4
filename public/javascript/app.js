(function() {
  var app = angular.module('patientApp', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider) {

      $routeProvider
        .when('/add', {
          templateUrl: '/templates/_addView.html'
        })
        .when('/timeline', {
          templateUrl: '/templates/_timelineView.html'
        });

    });




})();
