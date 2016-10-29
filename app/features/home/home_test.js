'use strict';

describe('Home Controller', function () {

    var homeController;

    var slideData = [
        {
            id: 1,
            image: '../../resources/images/418uG7pOFnL.jpg',
            active: true
        }
    ];

    /**
     * Gets called before each unit test it()
     */
    beforeEach(function() {

        module('ui.router');
        module('equipMe.home');

        // Load any dependencies
        inject(function ($injector) {
            var $controller = $injector.get('$controller');

            // Instantiate controller
            homeController = $controller('homeController', {
            });
        });
    });

    it('should initialize with default values', function() {
        expect(homeController).toBeDefined();
        expect(homeController.myInterval).toBe(3000);
        expect(homeController.noWrapSlides).toBe(false);
        expect(homeController.slides[0].id).toBe(slideData[0].id);
    });

});
