(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodCart')
        .controller('prodCartCheckoutController', prodCartCheckoutController);
       // .directive('crossMark', crossMarkDirective);

    function prodCartCheckoutController($scope, ngCart, orderService) {
        var vm = this;
        console.log($scope.$parent);
        $scope.$parent.prodCartVm.showFlag = false;
        vm.showPayPal = false;
        var order = {};
        vm.shipment = {};

        vm.settings = {
            paypal: {
                business: 'cmunegow@hawk.iit.edu',
                item_number: '1234',
                currency_code: 'USD'
            }
        };

        function buildOrder() {
            var orderLineItem = [];
            ngCart.getItems().forEach(function(element){
                orderLineItem.push({
                    product: {
                        id: element._id
                    },
                    qty: element._quantity
                });
            });
            order.orderLineItem = orderLineItem;
            order.status = "In Progress";
        }

        vm.confirmOrder = function () {
            buildOrder();
            console.log("Order Item", order);
            orderService.orderProduct(order).then(function (response) {
                vm.showPayPal = true;
                console.log(response.data);
            });
        };
    }
}(angular));