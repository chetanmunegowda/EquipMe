(function (angular) {
    'use strict';
    angular.module('equipMe.services')
        .service('productService', productService);

    function productService($q, $http, $log) {
        var vm = this;
        vm.createProduct = createProduct;
        vm.getAllProducts = getAllProducts;

        /**
         * Create Product
         * @param part
         * @returns {*}
         */
        function createProduct(user) {
            return $http.post('/register', user)
                .success(function (result) {
                    $log.debug("Product Successfully Created")
                    return result.data;
                })
                .error(function (err) {
                    $log.error(user);
                    $log.error(err.data);
                });
        }

        /**
         * Gets the All Product Data
         * @returns {HttpPromise}
         */
        function getAllProducts() {
            var deferred = $q.defer();

            deferred.resolve([{
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 1",
                prodCategory: "Category A",
                prodPrice: 34
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 2",
                prodCategory: "Category A",
                prodPrice: 89
            }, {
                prodImage: "../../resources/images/cardinal-invacare-powder-free-vinyl-exam-gloves-214276-BIG_0.jpg",
                prodName: "Product Name 3",
                prodCategory: "Category B",
                prodPrice: 100
            }, {
                prodImage: "../../resources/images/Kangaroo-cup.jpg",
                prodName: "Product Name 4",
                prodCategory: "Category C",
                prodPrice: 200
            }, {
                prodImage: "../../resources/images/Rollator_65650_R.png",
                prodName: "Product Name 5",
                prodCategory: "Category D",
                prodPrice: 70
            }, {
                prodImage: "../../resources/images/Wheelchair-Drink-Holder-For-U-Go-Esteem-Wheelchairs-large.jpg",
                prodName: "Product Name 6",
                prodCategory: "Category E",
                prodPrice: 90
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 7",
                prodCategory: "Category D",
                prodPrice: 90
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "418uG7pOFnL",
                prodCategory: "Category A",
                prodPrice: 80
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 8",
                prodCategory: "Category B",
                prodPrice: 23
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 9",
                prodCategory: "Category C",
                prodPrice: 45
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 10",
                prodCategory: "Category D",
                prodPrice: 67
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 11",
                prodCategory: "Category D",
                prodPrice: 87
            }]);

            return deferred.promise;
        }

        /**
         * Delete Product
         * @param part
         * @returns {*}
         */
        function deleteProduct(productId) {
            return $http.delete('/register', {
                id: productId
            })
                .success(function (result) {
                    $log.debug("Product Deleted Created")
                    return result.data;
                })
                .error(function (err) {
                    $log.error(user);
                    $log.error(err.data);
                });
        }

        /**
         * Modify Product
         * @param part
         * @returns {*}
         */
        function updateProduct(dataObj) {
            return $http.put('/register', {
                data: dataObj
            })
                .success(function (result) {
                    $log.debug("Product modified Created")
                    return result.data;
                })
                .error(function (err) {
                    $log.error(user);
                    $log.error(err.data);
                });
        }
    }
}(angular));