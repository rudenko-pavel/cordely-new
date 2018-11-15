(function() {
  'use strict';

  angular
    .module('running')
    .controller('CustomController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/services/customs/customs.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
      vm.custom_01              = vm.remoteData.custom_01;
      vm.custom_02              = vm.remoteData.custom_02;
      vm.custom_03              = vm.remoteData.custom_03;
      vm.list_custom_01         = vm.remoteData.list_custom_01;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
