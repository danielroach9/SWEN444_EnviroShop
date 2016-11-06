angular.module('EnviroShop')
    /*.service('DataService', function () {})*/
    .controller('HomeCtlr', ['$scope', '$location', function ($scope, $location) {

        console.log("HomeCtlr initialized");
        /* Hide the login signup divs immediately */
        $('#inputFieldsShopperSignup').hide();
        $scope.loginCredentials = {};

        $scope.login = function () {
            if ($scope.loginCredentials.email == "wegmans@gmail.com" && $scope.loginCredentials.pswd == "123456") {
                //$scope.nextPage =
                $location.url('/businessDashboard');
            }
            else if ($scope.loginCredentials.email == "enviroshopUser@gmail.com" && $scope.loginCredentials.pswd == "123456") {
                $location.url('/shopperDashboard');
            }

            else { $scope.showInvalidLoginModal(); }
        };

        $scope.showInvalidLoginModal = function () {
            $('#loginError').modal('show');
        };

        $scope.signUp = function () {
            $('#inputFieldsMain').hide();
            $('#inputFieldsShopperSignup').show();
        }
    }]);