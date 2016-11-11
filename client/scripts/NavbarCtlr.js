angular.module('EnviroShop')
    .controller('NavbarCtlr', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {

        console.log('NavbarCtlr initialized');

        var path = $location.path();

        $scope.showSearchBar = function () {
            $location.url("/search");
        };

        $scope.showFaqs = function() {
            $location.url("/faq");
        }
        $scope.showMap = function() {
            $location.url("/map");
        }


/*        if(path.includes('productview')) {
            $('#userButton').css('color', 'white');
        }

        else {
            console.log("path doesn't contain productview in it");
        }*/

        /* Always go to the users profile type */
        $scope.goToProfile = function() {
            $location.url($rootScope.profileLink);
        }
    }]);