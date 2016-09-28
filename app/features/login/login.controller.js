(function (angular) {
  'use strict';

  angular
  .module('equipMe.login')
  .controller('loginController', loginController);

  function loginController($state, $facebook, Notification) {
    var vm = this;
    vm.login = login;
    vm.loginwithfb = loginwithfb;

    function login() {
      console.log("hello chetan!");
      if(vm.username === 'user' && vm.password === 'user') {
          $state.go('productsPage');
      }
      else {
          console.log("Error");
          Notification.error({message: "Enter correct login details"});
      }
    }

    function refresh() {
      $facebook.api("/me").then(function(response) {
        console.log(response);
      },
      function(err) {
        console.log(err);
      });
    }

    refresh();

    function loginwithfb() {
      $facebook.login().then(function() {
        console.log("hello chetan");
        refresh();
      });
    }

  }
}(angular));
