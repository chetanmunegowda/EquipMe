(function (angular) {
    'use strict';

    angular
        .module('equipMe', [
            'ui.router',
            'ui.bootstrap',
            'equipMe.login',
            'equipMe.register',
            'equipMe.products',
            'equipMe.services',
            'ngFacebook',

            //directives
            'equipMe.pwCheck'
        ])
        .config(moduleConfig)
        .run(function ($rootScope) {
            // Load the facebook SDK asynchronously
            (function () {
                // If we've already installed the SDK, we're done
                if (document.getElementById('facebook-jssdk')) {
                    return;
                }

                // Get the first script element, which we'll use to find the parent node
                var firstScriptElement = document.getElementsByTagName('script')[0];

                // Create a new script element and set its id
                var facebookJS = document.createElement('script');
                facebookJS.id = 'facebook-jssdk';

                // Set the new script's source to the source of the Facebook JS SDK
                facebookJS.src = '//connect.facebook.net/en_US/all.js';

                // Insert the Facebook JS SDK into the DOM
                firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
            }());
        });


    function moduleConfig($facebookProvider, $urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.hashPrefix();
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('equipMe', {
                url: '',
                templateUrl: 'index.html',
                abstract: true
            });
        $facebookProvider.setAppId('1198508096838563');
    }
}(angular));
