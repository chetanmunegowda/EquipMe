(function (angular) {
    'use strict';

    angular
        .module('equipMe.addProduct')
        .controller('addProductController', addProductController);

    function addProductController(productService, $state) {
        var vm = this;
        vm.product = {};

        vm.prodCategory = ['Category A', 'Category B', 'Category C', 'Category D'];


        vm.submit = function() {
            productService.addProduct(vm.product).then(function () {
                $state.go('productsPage');
            });
        }
    }
}(angular));
