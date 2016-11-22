(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodCart')
        .controller('prodCartController', prodCartController);

    function prodCartController($state, ngCart, Notification, $rootScope) {
        var vm = this;
        vm.showFlag = true;
        
        vm.checkout = function () {
            if(ngCart.getTotalItems() > 0 && $rootScope.custId)
            {
                $state.go('prodCartPage.checkoutPage');
                vm.showFlag = false;
            }
            else if(ngCart.getTotalItems() <= 0) {
                Notification.error({message: "There are no products in cart!!"});
            }
            else {
                Notification.error({message: "Please login to account before you checkout"});
            }
        };

        vm.continueShopping = function () {
            $state.go('productsPage');
        };

        vm.clearcart = function () {
            ngCart.empty();
        }
    }
}(angular));