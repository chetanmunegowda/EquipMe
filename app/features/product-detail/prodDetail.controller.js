(function (angular) {
    'use strict';

    angular
        .module('equipMe.prodDetail')
        .controller('prodDetailController', prodDetailController);

    function prodDetailController(prodDetail) {
        var vm = this;
        if(prodDetail) {
            vm.prodDetailData = prodDetail;
        }
    }
}(angular));