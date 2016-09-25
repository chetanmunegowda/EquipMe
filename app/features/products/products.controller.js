(function (angular) {
    'use strict';

    angular
        .module('equipMe.products')
        .controller('productsController', productsController);

    function productsController(productService) {
        var vm = this;

        productService.getAllProducts()
            .then(function success(response) {
                vm.products = response;
            }, function error(error) {
                console.log(error);
            });
    }
}(angular));
