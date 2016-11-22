(function (angular) {
    'use strict';

    angular
        .module('equipMe.updateOrder')
        .controller('updateOrderController', updateOrderController);

    function updateOrderController(order, orderService, Notification, $state) {
        var vm = this;

        vm.order = order;
        vm.orderStatus = ["In Progress", "Cancelled", "Completed"];
        console.log("Order Object", order);
        
        vm.updateProduct = function () {
            orderService.updateOrderById(vm.order.id, vm.order).then(function(response) {
                Notification.success({message: "Order executed successfully!!"});
                $state.go("viewOrder");
            });
        }
    }
}(angular));