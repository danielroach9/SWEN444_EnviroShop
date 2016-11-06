var app = angular.module('EnviroShop', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'HomeCtlr'
        })
        .when('/businessDashboard',{
            templateUrl: 'views/businessdashboard.html',
            controller: ''
        })
        .when('/shopperDashboard',{
            templateUrl: 'views/shopperDashboard.html',
            controller: ''
        })
        .when('/businessReviews', {
            templateUrl: 'views/businessreviews.html',
            controller: ''
        })
        .when('/productview', {
            templateUrl: 'views/productview.html',
            controller: ''
        })
        .when('/search', {
            templateUrl: 'views/searchresults.html',
            controller: ''
        })
        .when('/navbar', {
            templateUrl: 'views/navbar.html',
            controller: ''
        })
        .when('/overview', {
            templateUrl: 'views/business_overview.html',
            controller: ''
        })
        .otherwise({ redirectTo: '/login'});
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