describe('product service', function() {
    'use strict';

    var $httpBackend;
    var productService;

    var testData = {
        product: [{
            productId: "abc",
            productName:"Product Name 2",
            productCategory:"Category B",
            skuCode:"2",
            productQuantity: 30,
            productPrice: 45,
            productImageUrl: "../../resources/images/Deluxe+Flexible+Sock+Aid_L-Vij1FL.png"
        },{
            productId: "def",
            productName:"Product Name 3",
            productCategory:"Category B",
            skuCode:"2",
            productQuantity: 30,
            productPrice: 45,
            productImageUrl: "../../resources/images/abcd.png"
        }]
    };

    /**
     * Gets called before each unit test it()
     */
    beforeEach(function() {
        // Load module
        module('equipMe.services');

        // Load any dependencies
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            productService = $injector.get('productService');
        });
    });

    it('should retrieve all products', function() {
        $httpBackend.expectGET('http://localhost:8080/equipme-rest/api/products').respond(testData.product);
        productService.getAllProducts(null).then(function(prodData) {
            expect(prodData).toEqual(testData.product);
        });
        $httpBackend.flush();
    });

    it('should retrieve one product', function() {
        var id = "abc";
        $httpBackend.expectGET('http://localhost:8080/equipme-rest/api/products/?id='+id).respond(testData.product[0]);
        productService.getProductById(id).then(function(prodData) {
            expect(prodData).toEqual(testData.product[0]);
        });
        $httpBackend.flush();
    });
});
