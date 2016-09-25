(function (angular) {
    'use strict';

    angular
        .module('equipMe.products')
        .controller('productsController', productsController);

    function productsController() {
        var vm = this;
        vm.productname = "";
        vm.products = [
            {name:"Product 1", url: "1234"},
            {name:"hsdsh", url: "1234"},
            {name:"sdfkhfslh", url: "1234"},
            {name:"ejwhfwe", url: "1234"},
            {name:"dfhsjhf", url: "1234"},
            {name:"hdsjkf", url: "1234"},
            {name:"ewlifyoeiw", url: "1234"},
            {name:"ewuw", url: "1234"}
        ];
    }
}(angular));
