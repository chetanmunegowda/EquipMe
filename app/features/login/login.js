(function (angular) {
    'use strict';

    angular
        .module('equipMe.login', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('loginPage', {
              url: '/login',
              templateUrl: 'features/login/login.html',
              controller: 'loginController',
              controllerAs: 'loginVm'
            });
    }
}(angular));
