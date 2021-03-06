(function () {
    "use strict";

    angular.module('equipMe.services')
        .factory('AuthInterceptor', [function () {
            return {
                // Send the Authorization header with each request
                'request': function (config) {
                    config.headers = config.headers || {};
                    var encodedString = btoa("bill:abc123");
                    config.headers.Authorization = 'Basic ' + encodedString;
                    return config;
                }
            };
        }]);
})();