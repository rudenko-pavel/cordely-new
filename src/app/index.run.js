(function() {
  'use strict';

  angular
    .module('running')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, $window) {
    $rootScope.$state = $state;
    $log.debug('runBlock end');
  }

})();
