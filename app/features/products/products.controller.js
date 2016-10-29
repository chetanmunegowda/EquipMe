(function (angular) {
    'use strict';

    angular
        .module('equipMe.products')
        .controller('productsController', productsController)
        .filter('category', productCategoryFilter);


    function productsController(prodData, ngCart) {
        var vm = this;

        console.log(prodData);
        vm.products = prodData;
        vm.productCategory = UniqueArraybyId(vm.products, "productCategory");

        ngCart.setTaxRate(1);
        ngCart.setShipping(0);

        function UniqueArraybyId(collection, keyname) {
            var output = [],
                keys = [];

            angular.forEach(collection, function (item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push({"productCategory": item[keyname], "on": false});
                }
            });
            return output;
        }
    }

    function productCategoryFilter () {
        return function (input, categories) {
            if (!categories || categories.length === 0) return input;
            var out = [];
            angular.forEach(input, function (item) {
                angular.forEach(categories, function (category) {
                    if (item.productCategory === category.productCategory) {
                        out.push(item);
                    }
                });
            });
            return out;
        }
    }
}(angular));
