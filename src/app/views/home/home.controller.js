(function() {
  'use strict';

  angular
    .module('running')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm        = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/home/home.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.slides              = vm.remoteData.slides;
      vm.list01              = vm.remoteData.list01;
      vm.title               = vm.remoteData.title;
      vm.pa_01               = vm.remoteData.pa_01;
      vm.pa_02               = vm.remoteData.pa_02;
      vm.pa_03               = vm.remoteData.pa_03;
      vm.pa_04               = vm.remoteData.pa_04;
      vm.pa_05               = vm.remoteData.pa_05;
      vm.pa_06               = vm.remoteData.pa_06;
      vm.pa_07               = vm.remoteData.pa_07;
      vm.pa_08               = vm.remoteData.pa_08;
      vm.pa_081              = vm.remoteData.pa_081;
      vm.pa_082              = vm.remoteData.pa_082;
      vm.pa_09               = vm.remoteData.pa_09;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
