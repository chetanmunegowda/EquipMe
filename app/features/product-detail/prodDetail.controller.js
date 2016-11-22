(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodDetail')
        .controller('prodDetailController', prodDetailController);

    function prodDetailController(prodDetail) {
        var vm = this;

        vm.prodDetailData = prodDetail;

        console.log("Data", vm.prodDetailData);

        var productId = vm.prodDetailData.id;

        vm.reviews = [];

        vm.review = {};

        vm.addReview = function() {
            vm.review.productId = productId;
            vm.reviews.push(vm.review);
            vm.review = {};
        };
    }
}(angular));