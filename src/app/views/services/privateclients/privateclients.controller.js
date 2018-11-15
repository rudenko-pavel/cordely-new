(function() {
  'use strict';

  angular
    .module('running')
    .controller('PrivateclientsController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/services/privateclients/privateclients.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
      vm.private_01          = vm.remoteData.private_01;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
