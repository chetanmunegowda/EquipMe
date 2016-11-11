(function (angular) {
    'use strict';

    angular
        .module('equipMe.viewsales', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('viewsales', {
                url: '/view-sales',
                templateUrl: 'features/view-sales/view-sales.html',
                controller: 'viewSalesController',
                controllerAs: 'viewSalesVm'
            });
    }
}(angular));