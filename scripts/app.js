var app = angular.module('EnviroShop', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '',
            controller: ''
        })
        .when('/',{
            templateUrl: '',
            controller: ''
        })
        .otherwise({ redirectTo: '/home'});
}]);