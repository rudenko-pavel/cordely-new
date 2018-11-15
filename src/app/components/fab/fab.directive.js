(function() {
  'use strict';

  angular
    .module('running')
    .directive('fabPanel', fabPanel);

  /** @ngInject */
  function fabPanel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/fab/fab.html',
      controller: FabController,
      controllerAs: 'fab',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FabController($http, $log, languageFactory, $translate) {
      var vm = this;
      vm.languageStorage        = languageFactory.getValue();       // get/set language
      vm.topDirections          = ['left', 'up'];
      vm.bottomDirections       = ['down', 'right'];
      vm.isOpen                 = false;
      vm.isVisibleFab           = false;

      vm.selectedMode           = 'md-scale';   //vm.availableModes = ['md-fling', 'md-scale'];
      vm.selectedDirection      = 'down';       //vm.availableDirections = ['up', 'down', 'left', 'right'];

      $http.get('assets/data.json').success(function(data) {
        vm.remoteData           = data;
        vm.languages            = vm.remoteData.languages;
      });

      // FUNCTION DESCRIPTION
      vm.currentLanguage      = currentLanguage;      // check current language
      vm.changeLanguage       = changeLanguage;       // change language
      vm.isVisibleFabFunc     = isVisibleFabFunc;     // show all items from drop-down list

      // IMPLEMENTATION
      function currentLanguage(){
        return languageFactory.getValue();
      }

      function changeLanguage(value){
        $log.info('changeLanguage():', value);
        languageFactory.setValue(value);
        $translate.use(  value );
      }

      function isVisibleFabFunc(){
        vm.isVisibleFab = true;
      }
    }
  }

})();
