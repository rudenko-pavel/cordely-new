(function() {
  'use strict';

  angular
    .module('running')
    .factory('languageFactory', Service);

  /** @ngInject */
  function Service($window){
    function getValue(){
      var result = $window.localStorage.getItem("languageStorage");
      result===null ? result = 'ru':'' ;
      return result;
    }

    function setValue (newValue){
      $window.localStorage.setItem("languageStorage", newValue);
    }

    return{
      getValue:getValue,
      setValue:setValue
    }
  }
})();
