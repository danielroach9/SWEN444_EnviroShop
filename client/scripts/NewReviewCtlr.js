angular.module('EnviroShop')
    .controller('NewReviewCtlr', ['$scope', '$location', 'DataService', '$routeParams', function ($scope, $location, DataService, $routeParams) {

        console.log('NewReviewCtlr initialized');

        var path = $location.path();

                                  $scope.id = $routeParams.id;
                                  
                                  $scope.reviews = [];
                                  $scope.review = null;
                                  
                                  DataService.getReviews('stuff').then(function successCallback(response) {
                                                                                        $scope.reviews = response.data;
                                                                                        $scope.review = $scope.reviews[$scope.id - 1]
                                                                                        
                                                                                        }, function errorCallback(response) {
                                                                                        console.log('REST call for info not set up');
                                                                                        });
                                  
        $scope.showSearchBar = function () {
            console.log('Would have opened the search bar');
        };

/*        if(path.includes('productview')) {
            $('#userButton').css('color', 'white');
        }

        else {
            console.log("path doesn't contain productview in it");
        }*/
    }]);
