angular.module('EnviroShop')
    /*.service('DataService', function () {})*/
    .controller('HomeCtlr', ['$scope', '$location', function ($scope, $location) {

        console.log("HomeCtlr initialized");
        $scope.loginCredentials = {};
        $scope.nextPage;

        $scope.login = function () {
            if ($scope.loginCredentials.email == "wegmans@gmail.com" && $scope.loginCredentials.pswd == "123456") {
                //$scope.nextPage =
                $location.url('/businessDashboard');
            }
            else if ($scope.loginCredentials.email == "enviroshopUser@gmail.com" && $scope.loginCredentials.pswd == "123456") {
                $location.url('/shopperDashboard');
            }
        };
    }]);