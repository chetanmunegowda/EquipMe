(function (angular) {
    'use strict';

    angular
        .module('equipMe.updateProduct')
        .controller('updateProductController', updateProductController);

    function updateProductController(productService, products, $filter, $state) {
        var vm = this;
        vm.updateProductForm = false;
        vm.products = products;
        vm.product = {};
        vm.filterProduct = {};
        vm.getProduct = getProduct;
        vm.deleteProduct = deleteProduct;

        vm.productCategory = UniqueProductCategory(products);

        function UniqueProductCategory(prodCollection) {
            var category = [];
            angular.forEach(prodCollection, function (item) {
                var cat = item["productCategory"];
                if (category.indexOf(cat) == -1) {
                    category.push(cat);
                }
            });
            return category;
        }


        function getProduct() {
            vm.updateProductForm = true;
            vm.filterProduct =  $filter('filter')(products, {productCategory: vm.product.productCategory,
            productName: vm.product.productname})[0];
            console.log(vm.filterProduct)
        }

        function deleteProduct(productId) {
            productService.deleteProductById(productId).then(function(response) {
                console.log(response.data);
                $state.go('productsPage');
            });
        }
    }
}(angular));