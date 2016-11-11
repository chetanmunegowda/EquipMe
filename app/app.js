(function (angular) {
    'use strict';

    angular
        .module('equipMe', [
            'ui.router',
            'ui.bootstrap',
            'equipMe.home',
            'equipMe.login',
            'equipMe.register',
            'equipMe.products',
            'equipMe.services',
            'equipMe.prodDetail',
            'equipMe.prodCart',
            'equipMe.addProduct',
            'equipMe.updateProduct',
            'equipMe.viewsales',

            //Third Party Directives
            'ngCookies',
            'ngCart',
            'ngFacebook',
            'ui-notification',
            'highcharts-ng',

            //directives
            'equipMe.backButton',
            'equipMe.loading'
        ])
        .config(moduleConfig)
        .run(runMethod);


    function moduleConfig($facebookProvider, $urlRouterProvider, $stateProvider, $locationProvider, NotificationProvider, $httpProvider) {
        $locationProvider.hashPrefix();
        $httpProvider.interceptors.push('loadingHttpInterceptor');
        $httpProvider.interceptors.push('AuthInterceptor');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('equipMe', {
                url: '',
                templateUrl: 'index.html',
                abstract: true
            });

        NotificationProvider.setOptions({
            delay: 2000,
            startTop: 80,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'center',
            positionY: 'top'
        });

        $facebookProvider.setAppId('1198508096838563');
        $facebookProvider.setCustomInit({
            channelUrl: 'http://localhost:8000/#/',
            xfbml: true
        });
        $facebookProvider.setVersion("v2.7");

    }

    function runMethod($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        $rootScope.isLoggedIn = false;
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });


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
    }

}(angular));
