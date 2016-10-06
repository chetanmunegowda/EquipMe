(function (angular) {
    'use strict';

    angular
        .module('equipMe.products', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('productsPage', {
                url: '/products',
                templateUrl: 'features/products/products.html',
                controller: 'productsController',
                controllerAs: 'productsVm',
                resolve: {
                    prodData: function(productService, $timeout) {
                            return productService.getAllProducts();
                    }
                }
            });
    }
}(angular));
