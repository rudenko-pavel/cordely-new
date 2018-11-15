(function() {
  'use strict';

  angular
    .module('running')
    .controller('RailwayController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;

    vm.promise = $http.get('app/views/carriages/railway/railway.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;

      vm.title          = vm.remoteData.title 
      vm.railway_01         = vm.remoteData.railway_01;
      vm.railway_02         = vm.remoteData.railway_02;
      vm.railway_021        = vm.remoteData.railway_021;
      vm.railway_03         = vm.remoteData.railway_03;
      vm.railway_04         = vm.remoteData.railway_04;
      vm.railway_05         = vm.remoteData.railway_05;
      vm.list01             = vm.remoteData.list01;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
