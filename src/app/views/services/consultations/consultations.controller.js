(function() {
  'use strict';

  angular
    .module('running')
    .controller('ConsultationController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/services/consultations/consultations.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
      vm.list01              = vm.remoteData.list01;
    });


    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
