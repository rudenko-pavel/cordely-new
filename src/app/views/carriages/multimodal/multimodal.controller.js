(function() {
  'use strict';

  angular
    .module('running')
    .controller('MultimodalController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/carriages/multimodal/multimodal.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
      vm.multimodal_01       = vm.remoteData.multimodal_01;
      vm.multimodal_02       = vm.remoteData.multimodal_02;
      vm.multimodal_03       = vm.remoteData.multimodal_03;

      vm.multimodalShema_01  = vm.remoteData.multimodalShema_01;
      vm.multimodalShema_02  = vm.remoteData.multimodalShema_02;
      vm.multimodalShema_03  = vm.remoteData.multimodalShema_03;
      vm.multimodalShema_04  = vm.remoteData.multimodalShema_04;
      vm.multimodalShema_05  = vm.remoteData.multimodalShema_05;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
