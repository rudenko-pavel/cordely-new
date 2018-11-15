(function() {
  'use strict';

  angular
    .module('running')
    .controller('AirController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/carriages/air/air.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;

      vm.title          = vm.remoteData.title;
      vm.air_01         = vm.remoteData.air_01;
      vm.air_02         = vm.remoteData.air_02;
      vm.air_03         = vm.remoteData.air_03;
      vm.air_04         = vm.remoteData.air_04;
      vm.air_05         = vm.remoteData.air_05;
      vm.list01         = vm.remoteData.list01;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
