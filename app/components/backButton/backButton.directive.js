(function (angular) {
    'use strict';

    angular
        .module('equipMe.backButton')
        .directive('backButton', backButton);

    function backButton($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        }
    }
}(angular));