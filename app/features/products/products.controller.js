(function (angular) {
    'use strict';

    angular
        .module('equipMe.products')
        .controller('productsController', productsController)
        .filter('category', productCategorFilter);


    function productsController(productService, $filter, ngCart) {
        var vm = this;

        productService.getAllProducts()
            .then(function success(response) {
                vm.products = response;
                vm.productCategory = UniqueArraybyId(response, "prodCategory");
            }, function error(error) {
                console.log(error);
            });

        function UniqueArraybyId(collection, keyname) {
            var output = [],
                keys = [];

            angular.forEach(collection, function (item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push({"prodCategory": item[keyname], "on": false});
                }
            });
            return output;
        };
    }

    function productCategorFilter () {
        return function (input, categories) {
            if (!categories || categories.length === 0) return input;
            var out = [];
            angular.forEach(input, function (item) {
                angular.forEach(categories, function (category) {
                    if (item.prodCategory === category.prodCategory) {
                        out.push(item);
                    }
                });
            });
            return out;
        }
    }
}(angular));
