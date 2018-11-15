(function() {
  'use strict';

  angular
    .module('running')
    .controller('SectionalController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/carriages/sectional/sectional.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
      vm.sectional_01        = vm.remoteData.sectional_01;
      vm.sectional_02        = vm.remoteData.sectional_02;
      vm.sectional_03        = vm.remoteData.sectional_03;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
