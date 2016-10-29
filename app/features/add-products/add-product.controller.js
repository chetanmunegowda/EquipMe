(function (angular) {
    'use strict';

    angular
        .module('equipMe.addProduct')
        .controller('addProductController', addProductController);

    function addProductController(productService) {
        var vm = this;
        vm.product = {};

        vm.submit = function() {
            productService.addProduct(vm.product);
        }
    }
}(angular));
