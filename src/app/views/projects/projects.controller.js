(function() {
  'use strict';

  angular
    .module('running')
    .controller('ProjectsController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/projects/projects.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
    });

    // FUNCTION DESCRIPTION


    // IMPLEMENTATION


  }
})();
