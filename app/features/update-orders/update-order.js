(function (angular) {
    'use strict';

    angular
        .module('equipMe.updateOrder', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('updateOrder', {
                url: '/update-order/{id}',
                templateUrl: 'features/update-orders/update-order.html',
                controller: 'updateOrderController',
                controllerAs: 'updateOrderVm',
                resolve: {
                    order: function ($stateParams, orderService, $filter) {
                        var orderId = $stateParams.id;
                        return orderService.getAllOrders().then(function (response) {
                            return $filter('filter')(response, {id: orderId})[0];
                        });
                    }
                }
            });
    }
}(angular));