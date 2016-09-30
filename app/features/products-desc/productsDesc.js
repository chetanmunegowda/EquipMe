(function (angular) {
    'use strict';

    angular
        .module('equipMe.productsDesc', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('productsDescPage', {
              url: '/productsDesc',
              templateUrl: 'features/products-desc/productsDesc.html',
              controller: 'productsDescController',
              controllerAs: 'productsVm'
            });
    }
}(angular));