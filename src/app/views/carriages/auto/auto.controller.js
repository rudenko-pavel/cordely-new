(function() {
  'use strict';

  angular
    .module('running')
    .controller('AutoController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;
    vm.promise = $http.get('app/views/carriages/auto/auto.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;

      vm.title          = vm.remoteData.title,
      vm.auto_01        = vm.remoteData.auto_01,
      vm.auto_02        = vm.remoteData.auto_02,
      vm.auto_021       = vm.remoteData.auto_021,      
      vm.auto_022       = vm.remoteData.auto_022,      
      vm.auto_023       = vm.remoteData.auto_023,      
      vm.auto_024       = vm.remoteData.auto_024,      
      vm.auto_03        = vm.remoteData.auto_03,
      vm.auto_04        = vm.remoteData.auto_04,
      vm.auto_05        = vm.remoteData.auto_05,
      vm.list01         = vm.remoteData.list01
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
