(function() {
  'use strict';

  angular
    .module('running')
    .controller('LogisticsController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/services/logistics/logistics.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
      vm.log_01              = vm.remoteData.log_01;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
