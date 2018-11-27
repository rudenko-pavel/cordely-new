(function() {
    'use strict';
  
    angular
      .module('running')
      .directive('sendEmail', sendEmail);
  
    /** @ngInject */
    function sendEmail() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/mailform/mailform.html',
            controller: SendEmailController,
            controllerAs: 'mailform',
            bindToController: true
        };
  
        return directive;
    
        /** @ngInject */
        function SendEmailController($scope,$log,$http) {
            var vm = this;
            vm.info = {};
            
            vm.pc_name      = "PC_NAME";
            vm.pc_email     = "PC_EMAIL";
            vm.pc_txt       = "PC_TXT";
            vm.pc_send      = "PC_SEND";
            vm.pc_subject   = "PC_SUBJECT";
            
            vm.patternDigit = "^\\d+$";
            vm.patternLetters = "^[a-zA-Zа-яА-ЯёЁіІєЄ \s-]+$";
            vm.patternEmail = "^.+@.+\..+$";
            vm.Errors = [
                {name:"required",       description:"field doesn't be empty.", en:"field doesn't be empty."   , ru:"поле не может быть пустым"},
                {name:"email",          description: "enter correctly email.", en:"enter correctly email."    , ru:"некорректный email"},
                {name: "patternLetters",description: "only letters."         , en:"only letters."             , ru:"только буквы"}
            ];
    
            // FUNCTION DESCRIPTION
            vm.returnError    = returnError;
            vm.sendMessage    = sendMessage;

            // IMPLEMENTATION

            function returnError(error){
                for(var i=0; i<vm.Errors.length; i++){
                    if (vm.Errors[i].name == error){
                        return vm.Errors[i].description;
                    }
                }
            }
        
            function sendMessage(){
                $log.info('sendMessage');
                vm.firstName      = '';
                vm.email          = '';
                vm.subject        = '';
                vm.textareaText   = '';

                $scope.userForm.$setPristine();
                $scope.userForm.$setUntouched();
            }
        }
    }
  })();
  