(function (angular) {
    'use strict';

    angular
        .module('equipMe.login')
        .controller('loginController', loginController);

    function loginController($state, facebookService) {
        var vm = this;
        vm.login = login;
        vm.loginwithfb = loginwithfb;

        function login() {
            console.log("hello chetan!");
            if(vm.username === 'user' && vm.password === 'user')
                $state.go('productsPage');
            else
            console.log("Error");
        }

        function loginwithfb() {
            console.log("hello chetan!");
            facebookService.getMyLastName()
            .then(function(response){
              console.log(response);
              var lastname = response.lastname;
            })
        }
    }
}(angular));
