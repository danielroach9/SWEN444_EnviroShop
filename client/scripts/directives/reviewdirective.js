'use strict';

angular.module('EnviroShop').directive('review', function () {
    return {
        restrict: 'E',
        templateUrl: '../../views/review.html',
        controller: 'ReviewCtlr',
        link: function postLink(scope, element, attrs) {
        }
    };
});
