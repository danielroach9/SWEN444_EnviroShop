angular.module('EnviroShop')
    .controller('ShopperProfileCtlr', ['$rootScope', '$scope', '$location', '$window', function ($rootScope, $scope, $location, $window) {

        console.log("ShopperProfileCtlr initialized");


        $scope.userProfile = {};

        /* This function 'changes' a users password.
         */
        $scope.submitPassword = function () {
            if ($scope.userProfile.passwd1 == $scope.userProfile.passwd2) {
                $('#changePasswordModal').hide();
                $('#passwordConfirmSubmitted').modal('show');
                console.log("Passwords match");
            }
            else {
                $('#passwordDenySubmitted').modal('show');
                console.log("Passwords do not match");
            }
        };


        /* Show the change password modal */
        $scope.changePassword = function () {
            $('#changePasswordModal').modal('show');
        };

        /* Show the change password modal */
        $scope.passwordChanged = function () {
            console.log("Password changed function got called");
            $('#changePasswordModal').modal('hide');
            $('#passwordConfirmSubmitted').modal('hide');
        };

        $('#changePasswordModal').on('hidden.bs.modal', function () {
            $(this).find('form').trigger('reset');
        })


    }]);/**
 * Created by Ian on 12/3/2016.
 */
