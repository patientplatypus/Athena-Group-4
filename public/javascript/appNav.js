(function(){
  var app = angular.module('patientApp');

  app.component('appNav', {
    template: `
      <nav class="tabs">
        <a href="#/add">Add a New Procedure</a>
        <a href="#/timeline">Timeline</a>
      </nav>
    `
  });
})();
