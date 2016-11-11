angular.module('EnviroShop')
    .controller('NavbarCtlr', ['$scope', '$location', function ($scope, $location) {

        console.log('NavbarCtlr initialized');

        var path = $location.path();

        $scope.showSearchBar = function () {
            console.log('Would have opened the search bar');
        };

        $scope.showFaqs = function() {
            $location.url("/faq");
        }


/*        if(path.includes('productview')) {
            $('#userButton').css('color', 'white');
        }

        else {
            console.log("path doesn't contain productview in it");
        }*/
    }]);