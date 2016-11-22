(function (angular) {
    'use strict';

    angular
        .module('equipMe.viewOrder', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('viewOrder', {
                url: '/view-order',
                templateUrl: 'features/view-orders/view-order.html',
                controller: 'viewOrderController',
                controllerAs: 'viewOrderVm',
                resolve: {
                    ordData: function(orderService) {
                        return orderService.getAllOrders();
                    }
                }
            });
    }
}(angular));