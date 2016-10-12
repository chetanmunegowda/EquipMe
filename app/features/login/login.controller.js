(function (angular) {
    'use strict';

    angular
        .module('equipMe.login')
        .controller('loginController', loginController);

    function loginController($state, $facebook, Notification) {
        var vm = this;
        vm.logintoapp = logintoapp;
        vm.login = login;

        function logintoapp() {
            console.log("hello chetan!");
            if (vm.username === 'user' && vm.password === 'user') {
                $state.go('productsPage');
            }
            else {
                console.log("Error");
                Notification.error({message: "Enter correct login details"});
            }
        }

        vm.isLoggedIn = false;
        function login() {
            $facebook.login().then(function () {
                refresh();
            });
        }

        function refresh() {
            $facebook.api("/me").then(
                function (response) {
                    vm.welcomeMsg = "Welcome " + response.name;
                    vm.isLoggedIn = true;
                },
                function (err) {
                    vm.welcomeMsg = "Please log in";
                });
        }

        refresh();
    }
}(angular));
