var app = angular.module('EnviroShop', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'HomeCtlr'
        })
        .when('/businessDashboard',{
            templateUrl: 'views/businessdashboard.html',
            controller: 'BusinessPageCtlr'
        })
        .when('/shopperDashboard',{
            templateUrl: 'views/shopperDashboard.html',
            controller: 'UserPageCtlr'
        })
        .when('/shopperProfileview',{
            templateUrl: 'views/shopperProfileview.html',
            controller: 'ShopperProfileCtlr'
        })
        .when('/business_reviews', {
            templateUrl: 'views/businessreviews.html',
            controller: 'BusinessPageCtlr'
        })
        .when('/business_products', {
            templateUrl: 'views/businessproducts.html',
            controller: 'BusinessPageCtlr'
        })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: ''
        })
        .when('/product/:id', {
            templateUrl: 'views/productview.html',
            controller: 'ProductViewCtlr'
        })
        .when('/product', {
            templateUrl: 'views/productview.html',
            controller: 'ProductViewCtlr'
        })
        .when('/smallproduct', {
            templateUrl: 'views/smallproduct.html',
            controller: ''
        })
        .when('/businessview', {
            templateUrl: 'views/businessview.html',
            controller: ''
        })
        .when('/search', {
            templateUrl: 'views/searchresults.html',
            controller: ''
        })
        .when('/review', {
            templateUrl: 'views/review.html',
            controller: ''
        })
        .when('/overview', {
            templateUrl: 'views/business_overview.html',
            controller: ''
        })
        .when('/faq', {
            templateUrl: 'views/faq.html',
            controller: ''
        })
        .when('/userDashboard',{
            templateUrl: 'views/userdashboard.html',
            controller: 'UserPageCtlr'
        })
        .otherwise({ redirectTo: '/'});
}]);

/*
    Potential directives
    - Product/Business reviews
    - Navigation bar???
    - Business pages left most view (Name of business, address, phone #, website

    Potential modals
    - Business - delete a product from its product listings
    - Replying to a review (show the review in the modal as well)
 */
