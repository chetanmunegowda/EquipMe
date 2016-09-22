(function (angular) {
    'use strict';

    angular
        .module('equipMe.register', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('registerPage', {
              url: '/register',
              templateUrl: 'features/register/register.html',
              controller: 'registerController',
              controllerAs: 'registerVm'
            });
    }
}(angular));
