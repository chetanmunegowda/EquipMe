(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodCart')
        .controller('prodCartCheckoutController', prodCartCheckoutController);
       // .directive('crossMark', crossMarkDirective);

    function prodCartCheckoutController($scope, ngCart) {
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

        vm.confirmOrder = function () {
            var cart = ngCart.getCart();
            console.log("Cart Details" +cart);
            order.cart = cart;
            order.shipment = vm.shipment;
            vm.showPayPal = true;

            console.log("order details:", order);
        }
    }
   /*
    function crossMarkDirective() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                console.log(scope);
                console.log(elem);
            }
        };
    }*/
}(angular));