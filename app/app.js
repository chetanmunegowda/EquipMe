(function (angular) {
  'use strict';

  angular
  .module('equipMe', [
    'ui.router',
    'ui.bootstrap',
    'equipMe.login',
    'equipMe.register',
    'equipMe.products',
    'equipMe.services'
  ])
  .config(moduleConfig)

  function moduleConfig ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.hashPrefix();
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    .state('equipMe', {
      url: '',
      templateUrl: 'index.html',
      abstract: true
    });
  }
}(angular));
