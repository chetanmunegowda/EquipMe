(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodCart', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('prodCartPage', {
                url: '/cart',
                templateUrl: 'features/product-cart/prodCart.html',
                controller: 'prodCartController',
                controllerAs: 'prodCartVm'
            })
            .state('prodCartPage.checkoutPage', {
                url: '/checkout',
                templateUrl: 'features/product-cart/product-cart-checkout/prodCartCheckout.html',
                controller: 'prodCartCheckoutController',
                controllerAs: 'prodCartCheckoutVm'
            })
    }
}(angular));