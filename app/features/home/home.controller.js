(function (angular) {
    'use strict';

    angular
        .module('equipMe.home')
        .controller('homeController', homeController);

    function homeController() {
        var vm = this;
        vm.myInterval = 3000;
        vm.noWrapSlides = false;
        vm.slides = [
            {
                id: 1,
                image: '../../resources/images/418uG7pOFnL.jpg',
                active: true
            },
            {
                id: 2,
                image: '../../resources/images/ACTIVEAID JTG 600 Series Folding Shower Commode Chair-dIRve4.png',
                active: true
            },
            {
                id: 3,
                image: '../../resources/images/front-caster-wheels-4-x-1-1-4-inch-pair.jpg',
                active: true
            },
            {
                id: 4,
                image: '../../resources/images/e-open-angled-paddle-handle-pair.jpg',
                active: true
            },
            {
                id: 5,
                image: '../../resources/images/COL-4000-2.jpg',
                active: true
            },
            {
                id: 6,
                image: '../../resources/images/5000A.jpg',
                active: true
            },
            {
                id: 7,
                image: '../../resources/images/3417.jpg',
                active: true
            }
        ];
    }
}(angular));
