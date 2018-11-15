(function() {
  'use strict';

  angular
    .module('running')
    .controller('ContactsController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm    = this;
    vm.topAnimate = 1;

    vm.promise = $http.get('app/views/contacts/contacts.json');
    vm.promise.success(function(data) {
      vm.remoteData          = data;
      vm.title               = vm.remoteData.title;
      vm.pc_01               = vm.remoteData.pc_01;
      vm.pc_02               = vm.remoteData.pc_02;
      vm.pc_03               = vm.remoteData.pc_03;
      vm.pc_04               = vm.remoteData.pc_04;
      vm.pc_05               = vm.remoteData.pc_05;
    });
  }
})();
