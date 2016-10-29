(function (angular) {
    'use strict';
    angular.module('equipMe.services')
        .service('productService', productService);

    function productService($http, Notification, $log) {
        var vm = this;
        vm.getAllProducts = getAllProducts;
        vm.getProductById = getProductById;
        vm.addProduct = addProduct;

       function addProduct(product) {
            return $http.post('http://localhost:8080/equipme-rest/api/products/', product)
                .success(function (result) {
                    Notification.success({message: "Product Added Successfully"});
                    console.log(result);
                    return result.data;

                })
                .error(function (err) {
                    Notification.error({message: "Error Adding the Product"});
                    return err;
                });
        }

        function getAllProducts() {
            return $http.get('http://localhost:8080/equipme-rest/api/products')
                .then(function (response) {
                    return response.data;
                });
        }

        function getProductById(productId) {
            var config = {};
            if (productId) {
                config.params = {'id': productId};
            }
            return $http.get('http://localhost:8080/equipme-rest/api/products/', config)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    console.log(error);
                })
        }
    }
}(angular));