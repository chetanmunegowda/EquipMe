(function (angular) {
    'use strict';

    angular
        .module('equipMe.addProduct', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('addProduct', {
                url: '/add-products',
                templateUrl: 'features/add-products/add-product.html',
                controller: 'addProductController',
                controllerAs: 'addProdVm'
            });
    }
}(angular));
