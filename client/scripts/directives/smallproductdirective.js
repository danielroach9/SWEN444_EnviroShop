'use strict';

angular.module('EnviroShop').directive('smallproduct', function () {
    return {
        restrict: 'E',
        templateUrl: '../../views/smallproduct.html',
        controller: 'SmallProductCtlr',
        link: function postLink(scope, element, attrs) {
        }
    };
});
