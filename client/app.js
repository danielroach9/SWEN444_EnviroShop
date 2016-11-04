var app = angular.module('EnviroShop', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtlr'
        })
        .when('/businessDashboard',{
            templateUrl: 'views/businessdashboard.html',
            controller: ''
        })
        .when('/businessReviews', {
            templateUrl: 'views/businessreviews.html',
            controller: ''
        })
        .when('productview', {
            templateUrl: 'views/productview.html',
            controller: ''
        })
        .when('search', {
            templateUrl: 'views/searchresults.html',
            controller: ''
        })
        .otherwise({ redirectTo: 'views/home'});
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