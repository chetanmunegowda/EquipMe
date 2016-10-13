(function (angular) {
    'use strict';
    angular.module('equipMe.services')
        .service('productService', productService);

    function productService($q, $http, $log) {
        var vm = this;
        vm.createProduct = createProduct;
        vm.getAllProducts = getAllProducts;


        function createProduct(user) {
            return $http.post('/register', user)
                .success(function (result) {
                    $log.debug("Product Successfully Created")
                    return result.data;
                })
                .error(function (err) {
                    return err;
                });
        }

        function getProd(user) {
            return $http.get('/register')
                .success(function (result) {
                    $log.debug("Product Successfully Created")
                    return result.data;
                })
                .error(function (err) {
                    return err;
                });
        }


        /**
         * Gets the All Product Data
         * @returns {HttpPromise}
         */
        function getAllProducts() {
            var deferred = $q.defer();

            deferred.resolve([{
                prodId: 1,
                prodImage: "../../resources/images/DuoDERM CGF Control Gel Formula Dressing-XaPtW0.png",
                prodName: "Product Name 1",
                prodCategory: "Category A",
                prodPrice: 34,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 2,
                prodImage: "../../resources/images/Deluxe+Flexible+Sock+Aid_L-Vij1FL.png",
                prodName: "Product Name 2",
                prodCategory: "Category A",
                prodPrice: 89,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 3,
                prodImage: "../../resources/images/cardinal-invacare-powder-free-vinyl-exam-gloves-214276-BIG_0.jpg",
                prodName: "Product Name 3",
                prodCategory: "Category B",
                prodPrice: 100,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 4,
                prodImage: "../../resources/images/Kangaroo-cup.jpg",
                prodName: "Product Name 4",
                prodCategory: "Category C",
                prodPrice: 200,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 5,
                prodImage: "../../resources/images/Rollator_65650_R.png",
                prodName: "Product Name 5",
                prodCategory: "Category D",
                prodPrice: 70,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 6,
                prodImage: "../../resources/images/Wheelchair-Drink-Holder-For-U-Go-Esteem-Wheelchairs-large.jpg",
                prodName: "Product Name 6",
                prodCategory: "Category E",
                prodPrice: 90,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 7,
                prodImage: "../../resources/images/FrogLegs-Colors_lg-01.jpg",
                prodName: "Product Name 7",
                prodCategory: "Category D",
                prodPrice: 90,
                reviews: []
            }, {
                prodId: 8,
                prodImage: "../../resources/images/418uG7pOFnL.jpg",
                prodName: "418uG7pOFnL",
                prodCategory: "Category A",
                prodPrice: 80,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 9,
                prodImage: "../../resources/images/HA-RD702_1.jpg",
                prodName: "Product Name 9",
                prodCategory: "Category B",
                prodPrice: 23,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 10,
                prodImage: "../../resources/images/JAY-J3-CF-B.jpg",
                prodName: "Product Name 10",
                prodCategory: "Category C",
                prodPrice: 45,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 11,
                prodImage: "../../resources/images/IN-5180.jpg",
                prodName: "Product Name 11",
                prodCategory: "Category D",
                prodPrice: 67,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 12,
                prodImage: "../../resources/images/Deluxe+Flexible+Sock+Aid_L-Vij1FL.png",
                prodName: "Product Name 12",
                prodCategory: "Category D",
                prodPrice: 87,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 13,
                prodImage: "../../resources/images/hard-gray-annodized-indent-handrim-24-540mm-25-559mm-26-590mm.jpg",
                prodName: "Product Name 13",
                prodCategory: "Category D",
                prodPrice: 87,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 14,
                prodImage: "../../resources/images/image514.jpg",
                prodName: "Product Name 14",
                prodCategory: "Category A",
                prodPrice: 87,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 15,
                prodImage: "../../resources/images/Deluxe+Flexible+Sock+Aid_L-Vij1FL.png",
                prodName: "Product Name 15",
                prodCategory: "Category D",
                prodPrice: 87,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 16,
                prodImage: "../../resources/images/phone-holder (1).jpg",
                prodName: "Product Name 16",
                prodCategory: "Category C",
                prodPrice: 87,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 17,
                prodImage: "../../resources/images/e-open-angled-paddle-handle-pair.jpg",
                prodName: "Product Name 17",
                prodCategory: "Category D",
                prodPrice: 87,
                prodMaxQuantity: 20,
                reviews: []
            }, {
                prodId: 18,
                prodImage: "../../resources/images/Wheelchair Transfer Boards - 8 x 24 - 2 Hand Holes-b7tXOC.png",
                prodName: "Product Name 18",
                prodCategory: "Category B",
                prodPrice: 87,
                prodMaxQuantity: 20,
                reviews: []
            }]);

            return deferred.promise;
        }


        function deleteProduct(productId) {
            var response = $http({
                method: "delete",
                url: "something",
                params: {
                    action: "delete"
                },
                data: {
                    id: productId
                }
            });

            return response;
        }

        /**
         * Modify Product
         * @param part
         * @returns {*}
         */
        function updateProduct(product) {
            var response = $http({
                method: "PUT",
                url: "something",
                data: {
                    prodData: product
                }
            });

            return response;
        }
    }
}(angular));