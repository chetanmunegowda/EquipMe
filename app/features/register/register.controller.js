(function (angular) {
    'use strict';

    angular
        .module('equipMe.register')
        .controller('registerController', registerController);

    function registerController(UserService, $state , FlashService, Notification) {
        var vm = this;
        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $state.go('loginPage');
                    } else {
                        Notification.error({message: "Error in registering"});
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }
}(angular));
