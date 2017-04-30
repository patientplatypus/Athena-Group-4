
(function(){
  var app = angular.module('patientApp');

  app.component('timeline', {
    template: `
    <section id="time" class="container-fluid">
      <div class="row" >
        <div class="col-sm-6 col-md-4 col-lg-4">
          <timebucket tminus='30'></timebucket>
        </div>
      </div>
      <div class="row" >
        <div class="col-sm-6 col-md-4 col-lg-4">
          <timebucket tminus='20'></timebucket>
        </div>
      </div>
      <div class="row" >
        <div class="col-sm-6 col-md-4 col-lg-4">
          <timebucket tminus='10'></timebucket>
        </div>
      </div>
      <div class="row" >
        <div class="col-sm-6 col-md-4 col-lg-4">
          <timebucket tminus='5'></timebucket>
        </div>
      </div>
      <div class="row" >
        <div class="col-sm-6 col-md-4 col-lg-4">
          <timebucket tminus='2'></timebucket>
        </div>
      </div>
    </section>
    `
  });
})();
