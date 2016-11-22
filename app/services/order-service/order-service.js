(function (angular) {
    'use strict';
    angular.module('equipMe.services')
        .service('orderService', orderService);

    function orderService($http, Notification) {
        var vm = this;

        vm.orderProduct = orderProduct;
        vm.getAllOrders = getAllOrders;
        vm.updateOrderById = updateOrderById;

        function orderProduct(order) {
            return $http.post('http://localhost:8080/equipme-rest/api/orders/', order)
                .success(function (result) {
                    Notification.success({message: "Product ordered Successfully"});
                    return result.data;

                })
                .error(function (err) {
                    Notification.error({message: "Error ordering the Product"});
                    return err;
                });
        }

        function getAllOrders() {
            return $http.get('http://localhost:8080/equipme-rest/api/orders')
                .then(function (response) {
                    return response.data;
                });
        }

        function getOrderById(orderId) {
            return $http.get('http://localhost:8080/equipme-rest/api/orders')
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    console.log(error);
                })
        }

        function updateOrderById(orderId, data) {
            return $http.put('http://localhost:8080/equipme-rest/api/orders/'+orderId, data)
                .then(function (response) {
                    return response.data;
                });
        }

    }
}(angular));