angular.module('EnviroShop')
    .controller('ProductViewCtlr', ['$scope', 'DataService', '$location', '$routeParams', function ($scope, DataService, $location, $routeParams) {

        console.log('ProductViewCtlr initialized');

        var path = $location.path();
                                    
        $scope.id = $routeParams.id;

        $scope.showSearchBar = function () {
            console.log('Would have opened the search bar');
        };
                                    
        $scope.products = [];
                                    
                                    DataService.getBusinessProducts('stuff').then(function successCallback(response) {
                                                                                  $scope.products = response.data;
                                                                                  $scope.product = $scope.products[$scope.id - 1]
                                                                                  console.log('YO YO YO YO')
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
