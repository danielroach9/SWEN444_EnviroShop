angular.module('EnviroShop')
    /*.service('DataService', function () {})*/
    .controller('HomeCtlr', ['$rootScope', '$scope', '$location', '$window', function ($rootScope, $scope, $location, $window) {

        console.log("HomeCtlr initialized");

        /* Hide the login signup divs immediately */
        $('#inputFieldsShopperSignup').hide();
        $('#inputFieldsBusinessSignup').hide();
        $scope.loginCredentials = {};
        $rootScope.homeLink = '#/';

        /* This function 'logs in' a user.  There are two hardcoded acceptable inputs for a business and a shopper'
           it's really just two links to other web-pages
         */
        $scope.login = function () {
            if ($scope.loginCredentials.email == "wegmans@gmail.com" && $scope.loginCredentials.pswd == "123456") {
                //$scope.nextPage =
                $location.url('/businessDashboard');
                $rootScope.homeLink = '#/businessDashboard/';
                $rootScope.profileLink = '/businessDashboard';
            }
            else if ($scope.loginCredentials.email == "enviroshopUser@gmail.com" && $scope.loginCredentials.pswd == "123456") {
                $location.url('/shopperDashboard');
                $rootScope.homeLink = '#/shopperDashboard/';
                $rootScope.profileLink = '/shopperProfileview';
            }

            /* Let the user know the sign in information isn't correct */
            else { $scope.showInvalidLoginModal(); }
        };

        /* This function shows the login error modal */
        $scope.showInvalidLoginModal = function () {
            $('#loginError').modal('show');
        };

        /* Show the signup modal, allowing the user to choose what type of account they want to create */
        $scope.signUp = function () {
            $scope.showSignupModal();
        };

        /* Show the signup modal, allowing the user to choose what type of account they want to create */
        $scope.showSignupModal = function () {
            $('#signupSelect').modal('show');
        };

        /* Show the information submitted modal, confirming to the user that their entry is OK, you know
         * if we had a backend.  Instead just show the modal and reload the page */
        $scope.submit = function () {
            $('#signupSubmitted').modal('show');
        };


        /* Show the shopper input fields */
        $scope.signupShopper = function() {
            $('#inputFieldsMain').hide();
            $('#inputFieldsShopperSignup').show();
        };

        /* Show the business input fields */
        $scope.signupBusiness = function() {
            $('#inputFieldsMain').hide();
            $('#inputFieldsBusinessSignup').show();
        };

        /* This function 'cancels' inputting signup information.  It actually just reloads the page *shrug*
         */
        $scope.cancel = function() {
            $window.location.reload();
        };


    }]);