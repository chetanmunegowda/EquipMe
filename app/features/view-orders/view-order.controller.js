(function (angular) {
    'use strict';

    angular
        .module('equipMe.viewOrder')
        .controller('viewOrderController', viewOrderController);

    function viewOrderController($state, ordData) {
        var vm = this;
        vm.updateOrder = updateOrder;

        vm.orders = ordData;

        console.log("Order", vm.orders);

        function updateOrder(orderId) {
            $state.go("updateOrder",{id: orderId});
        }
    }
}(angular));