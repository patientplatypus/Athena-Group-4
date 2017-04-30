
(function(){
  var app = angular.module('patientApp');

  app.component('timebucket', {
    bindings: {
      tminus: '@',

    },
    template: `
      <div class="timebucket">
        <div class="row">
          <h4 class="timebucket">{{$ctrl.tminus}}</h4>
          <h6>Timebucket</h6>
        </div>
      </div>
    `
  });
})();
