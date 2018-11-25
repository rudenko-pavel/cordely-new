(function() {
  'use strict';

  angular
    .module('running')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($http, $location) {
      var vm = this;
      vm.isMobileShow     = false;
      vm.menuButton       ="fa-bars";

      $http.get('assets/data.json').success(function(data) {
        vm.remoteData           = data;
        vm.itemsInTopMenu       = vm.remoteData.itemsInTopMenu;
        vm.itemsDropdownMenu    = vm.remoteData.itemsDropdownMenu
      });

    // FUNCTION DESCRIPTION
    vm.goTo                    = goTo;                           // check $location(path)
    vm.showMobile              = showMobile;

    // IMPLEMENTATION
      function goTo(page) {
        vm.isMobileShow==true? vm.isMobileShow=false:'';
        $location.path(page);
      }


      function showMobile(){
        console.log("showMobile()");
        var myEl = angular.element(document.querySelector('#body'));
        myEl.toggleClass('mobile-nav-active');

        vm.isMobileShow = !vm.isMobileShow;
        vm.menuButton == "fa-bars" ? vm.menuButton = "fa-times": vm.menuButton = "fa-bars";
        
      }

    }
  }
})();
