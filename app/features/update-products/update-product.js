(function (angular) {
    'use strict';

    angular
        .module('equipMe.updateProduct', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('updateProduct', {
                url: '/update-products',
                templateUrl: 'features/update-products/update-product.html',
                controller: 'updateProductController',
                controllerAs: 'updateProdVm',
                resolve: {
                    products: function(productService) {
                        return productService.getAllProducts();
                    }
                }
            });
    }
}(angular));