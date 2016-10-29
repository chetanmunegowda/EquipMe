'use strict';

describe('Product Controller', function () {

  'use strict';

  var productController;

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {

    module('ui.router')
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
