
(function(){
  var app = angular.module('patientApp');

  app.component('add', {
    controller: function($location, procedureService) {
        this.newProcedure = {
          patientname: '',
          proceduredate: '',
          vitals: '',
          symptoms: '',
          notes:''
       };

        this.newProcedure = function() {
          var self = this;

          procedureService.save({
            patientname: self.newProcedure.patientname,
            proceduredate: self.newProcedure.proceduredate,
            vitals: self.newProcedure.vitals,
            symptoms: self.newProcedure.symptoms,
            notes: self.newProcedure.notes
          }, function() {
            // Redirect back to the homepage and display all the cards
            // @todo: Instead of reloading all cards just push this one
            // $location.path('/');
            self.newProcedure.patientname = '';
            self.newProcedure.proceduredate = '';
            self.newProcedure.vitals = '';
            self.newProcedure.symptoms = '';
            self.newProcedure.notes = '';
            console.log('got to callback');
          })
        };
      },
      //
      // proceduredate: { type: Date, default: Date.now() },
      // vitals: { type: String, required: false },
      // symptoms: { type: String, required: false },
      // notes: { type: String, required: false },
    template: `
    <section class="container-fluid">
      <div class="row">
        <form name="add" id="add" ng-submit="$ctrl.newProcedure()">
          <input type="text" name="question0" id="question0" placeholder="What's your name?" ng-model="$ctrl.newProcedure.patientname">
          <input type="text" name="question1" id="question1" placeholder="What's your procedure date?" ng-model="$ctrl.newProcedure.proceduredate">
          <input type="text" name="question2" id="question2" placeholder="What's your vitals?" ng-model="$ctrl.newProcedure.vitals">
          <input type="text" name="question3" id="question3" placeholder="What's your symptoms?" ng-model="$ctrl.newProcedure.symptoms">
          <input type="text" name="question4" id="question4" placeholder="What's your notes?" ng-model="$ctrl.newProcedure.notes">
          <input type="submit" id="submit" value="Submit">
        </form>
      </div>
    </section>
    `
  });
})();
