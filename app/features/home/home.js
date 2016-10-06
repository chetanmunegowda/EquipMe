(function (angular) {
    'use strict';

    angular
        .module('equipMe.home', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('homePage', {
              url: '/',
              templateUrl: 'features/home/home.html',
              controller: 'homeController',
              controllerAs: 'homeVm'
            });
    }
}(angular));
