(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodCart')
        .controller('prodCartController', prodCartController);

    function prodCartController($state) {
        var vm = this;
        vm.showFlag = true;

        vm.paypalSettings = {
            'business':'',
            'currency_code': 'USD'
        };
        
        vm.checkout = function () {
            $state.go('prodCartPage.checkoutPage');
            vm.showFlag = false;
        };

        vm.continueShopping = function () {
            $state.go('productsPage');
        };
    }
}(angular));