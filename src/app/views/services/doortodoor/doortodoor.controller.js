(function() {
  'use strict';

  angular
    .module('running')
    .controller('DoortodoorController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/services/doortodoor/doortodoor.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
      vm.doortodoor_01       = vm.remoteData.doortodoor_01;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
