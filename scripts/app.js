var app = angular.module('EnviroShop', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '',
            controller: ''
        })
        .when('/businessDashboard',{
            templateUrl: 'businessdashboard.html',
            controller: ''
        })
        .when('/businessReviews', {
            templateUrl: 'businessreviews.html',
            controller: ''
        })
        .when('productview', {
            templateUrl: 'productview.html',
            controller: ''
        })
        .when('search', {
            templateUrl: 'searchresults.html',
            controller: ''
        })
        .otherwise({ redirectTo: '/home'});
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