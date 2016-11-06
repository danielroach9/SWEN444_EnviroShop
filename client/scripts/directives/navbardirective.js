'use strict';

angular.module('EnviroShop').directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: '../../views/navbar.html',
        controller: 'NavbarCtlr',
        link: function postLink(scope, element, attrs) {

        }
    };
});