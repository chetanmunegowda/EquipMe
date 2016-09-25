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
                    //Notification.error('Error occurred while saving. Please try again!');
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
                prodCategory: "a",
                prodPrice: "34"
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 2",
                prodCategory: "a",
                prodPrice: "89"
            }, {
                prodImage: "../../resources/images/cardinal-invacare-powder-free-vinyl-exam-gloves-214276-BIG_0.jpg",
                prodName: "Product Name 3",
                prodCategory: "b",
                prodPrice: "100"
            }, {
                prodImage: "../../resources/images/Kangaroo-cup.jpg",
                prodName: "Product Name 4",
                prodCategory: "c",
                prodPrice: "200"
            }, {
                prodImage: "../../resources/images/Rollator_65650_R.png",
                prodName: "Product Name 5",
                prodCategory: "d",
                prodPrice: "70"
            }, {
                prodImage: "../../resources/images/Wheelchair-Drink-Holder-For-U-Go-Esteem-Wheelchairs-large.jpg",
                prodName: "Product Name 6",
                prodCategory: "d",
                prodPrice: "90"
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 7",
                prodCategory: "d",
                prodPrice: "90"
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "418uG7pOFnL",
                prodCategory: "e",
                prodPrice: "80"
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 8",
                prodCategory: "e",
                prodPrice: "23"
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 9",
                prodCategory: "a",
                prodPrice: "45"
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 10",
                prodCategory: "a",
                prodPrice: "67"
            }, {
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "Product Name 11",
                prodCategory: "c",
                prodPrice: "87"
            }]);

            return deferred.promise;
        }
    }
}(angular));