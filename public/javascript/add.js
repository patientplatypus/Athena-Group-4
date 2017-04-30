
(function(){
  var app = angular.module('patientApp');

  app.component('add', {
    bindings: {
      question: '@'
    },
    template: `
      <h1>Add</h1>
    `
  });
})();
