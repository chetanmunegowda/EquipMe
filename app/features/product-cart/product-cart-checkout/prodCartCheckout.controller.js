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
        var order = {};
        vm.shipment = {};

        vm.confirmOrder = function () {
            var cart = ngCart.getCart();
            order.cart = cart;
            order.shipment = vm.shipment;

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