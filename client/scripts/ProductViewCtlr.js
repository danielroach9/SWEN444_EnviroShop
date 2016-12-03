angular.module('EnviroShop')
    .controller('ProductViewCtlr', ['$scope', '$location', function ($scope, $location) {

        console.log('ProductViewCtlr initialized');

        var path = $location.path();

        $scope.showSearchBar = function () {
            console.log('Would have opened the search bar');
        };
                                    
        $scope.products = [];
                                    
                                    DataService.getBusinessProducts('stuff').then(function successCallback(response) {
                                                                                  $scope.products = response.data;
                                                                                  }, function errorCallback(response) {
                                                                                  console.log('REST call for info not set up');
                                                                                  });
                                     

/*        if(path.includes('productview')) {
            $('#userButton').css('color', 'white');
        }

        else {
            console.log("path doesn't contain productview in it");
        }*/
    }]);
