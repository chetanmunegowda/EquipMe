(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodDetail', [])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('prodDetailPage', {
                url: '/products/{id}',
                templateUrl: 'features/product-detail/prodDetail.html',
                controller: 'prodDetailController',
                controllerAs: 'prodDetailVm',
                resolve: {
                    prodDetail: function ($stateParams, productService) {
                        return productService.getAllProducts()
                            .then(function (products) {
                                return products[$stateParams.id];
                            });
                    }
                }
            });
    }
}(angular));