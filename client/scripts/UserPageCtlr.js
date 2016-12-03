angular.module('EnviroShop')
// .service('DataService', function () {})
    .controller('UserPageCtlr', ['$scope', 'DataService', '$location', function ($scope, DataService, $location) {

        console.log('UserPageCtlr initialized');

        $scope.userFeed = null;
                                 $scope.products = null;


        DataService.getUserFeed('bis')
            .then(function successCallback(response) {
                $scope.userFeed = response.data;
            }, function errorCallback(response) {
                console.log('REST call for info not set up');
            });
                                 
                                 DataService.getBusinessProducts('stuff').then(function successCallback(response) {
                                                                               $scope.products = response.data;
                                                                               }, function errorCallback(response) {
                                                                               console.log('REST call for info not set up');
                                                                               });


    }]);
