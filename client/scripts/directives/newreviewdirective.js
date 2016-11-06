'use strict';

angular.module('EnviroShop').directive('newreview', function () {
    return {
        restrict: 'E',
        templateUrl: '../../views/newreview.html',
        controller: 'NewReviewCtlr',
        link: function postLink(scope, element, attrs) {
        }
    };
});
