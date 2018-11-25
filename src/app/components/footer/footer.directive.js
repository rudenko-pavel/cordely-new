(function() {
  'use strict';

  angular
    .module('running')
    .directive('footerPart', footerPart);

  /** @ngInject */
  function footerPart() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'footer',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController() {
      var vm = this;
      vm.isMobileShow     = false;

    }
  }
})();
