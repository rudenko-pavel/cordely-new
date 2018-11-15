(function() {
    'use strict';
  
    angular
      .module('running')
      .directive('preLoader', preLoader);
  
    /** @ngInject */
    function preLoader() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/loader/loader.html',
        controller: LoaderController,
        controllerAs: 'loader',
        bindToController: true
      };
  
      return directive;
  
      /** @ngInject */
      function LoaderController() {
        var vm = this;

  
        // FUNCTION DESCRIPTION
  
        // IMPLEMENTATION

  
        }
    }
  })();
  