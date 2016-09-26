(function (angular) {
    'use strict';

    angular
        .module('equipMe.products')
        .controller('productsController', productsController)
        .filter('category', function () {
            return function (input, techs) {
                console.log(input);
                console.log(techs);
                if (!techs || techs.length === 0) return input;
                var out = [];
                angular.forEach(input, function (item) {
                    angular.forEach(techs, function (tech) {
                        if (item.prodCategory === tech.prodCategory) {
                            console.log(item);
                            out.push(item);
                        }
                    });
                });
                return out;
            }
        });


    function productsController(productService, categoryFilter, $filter) {
        var vm = this;

        productService.getAllProducts()
            .then(function success(response) {
                vm.products = response;
                console.log(vm.products);
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
}(angular));
