(function (angular) {
    'use strict';

    angular
        .module('equipMe.register')
        .controller('registerController', registerController);

    function registerController(customerService, $state, Notification, $rootScope) {
        var vm = this;
        vm.register = register;

        function register() {
            vm.dataLoading = true;

            customerService.saveCustomer(vm.customer)
                .then(function (customer) {
                        console.log(customer);
                        $rootScope.custId = customer.data.id;
                        console.log($rootScope.custId);
                        $state.go('loginPage');
                        Notification.success({message: "Customer successfully registered"});
                }, function () {
                        Notification.error({message: "Customer successfully registered"});
                });
        }
    }
}(angular));
