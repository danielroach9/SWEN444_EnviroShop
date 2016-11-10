angular.module('EnviroShop')
// .service('DataService', function () {})
.controller('BusinessPageCtlr', ['$scope', 'DataService', '$location', function ($scope, DataService, $location) {

    console.log('BusinessPageCtlr initialized');

    $scope.info = null;
    $scope.fiveReviews = [];
    $scope.reviews = [];

    DataService.getBusinessInfo('bis')
        .then(function successCallback(response) {
            $scope.info = response.data;
        }, function errorCallback(response) {
            console.log('REST call for info not set up');
        });

    DataService.getBusinessReviews('bis')
        .then(function successCallback(response) {

            $scope.reviews = response.data;
            $scope.fiveReviews = $scope.reviews.slice(0,5);

        }, function errorCallback(response) {
            console.log('REST call for reviews not set up');
        });


}]);