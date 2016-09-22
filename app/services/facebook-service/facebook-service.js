(function (angular) {
  'use strict';
  angular.module('equipMe.services')
  .factory('facebookService', facebookService);

  function facebookService($q) {
    return {
      getMyLastName: function() {
        console.log("hello fb");
        var deferred = $q.defer();
        FB.api('/me', {
        }, function(response) {
          console.log(response);
          if (!response || response.error) {
            deferred.reject('Error occured');
          } else {
            deferred.resolve(response);
          }
        });
        return deferred.promise;
      }
    }
  }
}(angular));
