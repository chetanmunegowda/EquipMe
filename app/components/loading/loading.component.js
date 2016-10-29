(function() {
    "use strict";

    angular.module('equipMe.loading')
        .component('loading', {
            template: '<img src="../../resources/images/spinner.svg" ng-if="$ctrl.show">',
            controller: LoadingController
        });


    LoadingController.$inject = ['$rootScope'];
    function LoadingController ($rootScope) {
        var $ctrl = this;
        var listener;

        $ctrl.$onInit = function() {
            $ctrl.show = false;
            listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
        };

        $ctrl.$onDestroy = function() {
            listener();
        };

        function onSpinnerActivate(event, data) {
            $ctrl.show = data.on;
        }
    }

})();
