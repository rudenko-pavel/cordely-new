(function() {
  'use strict';

  angular
    .module('running')
    .controller('CarriagesController', MainController);

  /** @ngInject */
  function MainController($location,$http, $log) {
    var vm = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/carriages/carriages.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.list02              = vm.remoteData.list02;
      vm.title               = vm.remoteData.title;
      vm.carriages_01        = vm.remoteData.carriages_01;
      vm.read                = vm.remoteData.read;
    });
    

    // FUNCTION DESCRIPTION
    vm.goTo                   = goTo; 

    // IMPLEMENTATION
    function goTo(path){
      $log.info("goTo",path);
      var newPath = path.substring(3);

      $log.info("goTo2",newPath);
      $location.path(newPath);
    }
    
  }
})();
