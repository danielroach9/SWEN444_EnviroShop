angular.module('EnviroShop')
// .service('DataService', function () {})
.controller('SearchCtlr', ['$scope', 'DataService', '$location', '$routeParams', function ($scope, DataService, $location, $routeParams) {

var path = $location.path();

$scope.id = $routeParams.id;

$scope.showSearchBar = function () {
    console.log('Would have opened the search bar');
};

$scope.items = [];

DataService.getSearchItems('bis').then(function successCallback(response) {
    $scope.items = response.data;
    $scope.item = $scope.items[$scope.id - 1]
    }, function errorCallback(response) {
    console.log('REST call for info not set up');
    });
}]);






/*        if(path.includes('productview')) {
            $('#userButton').css('color', 'white');
        }

        else {
            console.log("path doesn't contain productview in it");
        }*/
