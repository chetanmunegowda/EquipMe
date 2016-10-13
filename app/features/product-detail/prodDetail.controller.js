/**
 * Created by chetanmunegowda on 10/13/16.
 */
(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodDetail')
        .controller('prodDetailController', prodDetailController);

    function prodDetailController(prodDetail) {
        var vm = this;
        console.log(prodDetail);
        if(prodDetail) {
            vm.prodDetailData = prodDetail;
        }

        vm.review = {};

        vm.addReview = function() {
            vm.prodDetailData.reviews.push(vm.review);

            vm.review = {};
        };
    }
}(angular));