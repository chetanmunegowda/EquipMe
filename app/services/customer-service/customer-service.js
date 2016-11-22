(function (angular) {
    'use strict';
    angular.module('equipMe.services')
        .service('customerService', customerService);

    function customerService($http, Notification) {
        var vm = this;
        vm.saveCustomer = saveCustomer;

        function saveCustomer(customer) {
            return $http.post('http://localhost:8080/equipme-rest/api/customers/', customer)
                .success(function (result) {
                    return result.data;
                })
                .error(function (err) {
                    Notification.error({message: "Error registering the customer"});
                    return err;
                });
        }
    }
}(angular));