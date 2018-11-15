(function() {
  'use strict';

  angular
    .module('running')
    .controller('SeaController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/carriages/sea/sea.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;

      vm.title          = vm.remoteData.title;
      vm.sea_01         = vm.remoteData.sea_01;
      vm.sea_02         = vm.remoteData.sea_02;
      vm.sea_03         = vm.remoteData.sea_03;
      vm.sea_04         = vm.remoteData.sea_04;
      vm.sea_05         = vm.remoteData.sea_05;
      vm.list01         = vm.remoteData.list01;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
