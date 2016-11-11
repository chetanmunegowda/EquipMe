(function (angular) {
    'use strict';

    angular
        .module('equipMe.login')
        .controller('loginController', loginController);

    function loginController($rootScope, $state, AuthenticationService, FlashService, Notification) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    $rootScope.isLoggedIn = true;
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $state.go("productsPage");
                } else {
                    Notification.error({message: "Please enter correct credentials"});
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }
}(angular));
